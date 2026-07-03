/**
 * fetch-cms-data.mjs
 * Run at build time (GitHub Actions) to:
 *  1. Pre-fetch all CMS list endpoints → public/cms-data/<dept>/<endpoint>.json
 *  2. Pre-fetch every event's full detail → public/cms-data/<dept>/event_<id>.json
 *  3. Download every CMS image → public/cms-data/images/<hash>.<ext>
 *     and rewrite all image URLs in the JSON to /MITS-Design1/cms-data/images/...
 */
import https from "https";
import http from "http";
import crypto from "crypto";
import { mkdirSync, writeFileSync, existsSync } from "fs";
import { join, dirname, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const DEPT_CODES = {
  cse:   "CSE",
  ce:    "CE",
  eee:   "EEE",
  me:    "MECH",
  ece:   "ECE",
  ai:    "AI",
  aiml:  "AIML",
  cseds: "CSEDS",
  csecs: "CS",
};

const ENDPOINTS = ["events", "mous", "achievements", "patents", "publications", "placements", "projects"];
const CMS_HOST  = "mits-cms.freedev.app";
const IMG_DIR   = join(__dirname, "public", "cms-data", "images");
const STATIC_PREFIX = "/MITS-Design1/cms-data/images/";

let cachedCookie = null;

// ── AES challenge solver ──────────────────────────────────────────────────────
function solveAESChallenge(html) {
  const a = html.match(/\ba=toNumbers\("([0-9a-f]+)"\)/);
  const b = html.match(/\bb=toNumbers\("([0-9a-f]+)"\)/);
  const c = html.match(/\bc=toNumbers\("([0-9a-f]+)"\)/);
  if (!a || !b || !c) return null;
  try {
    const key = Buffer.from(a[1], "hex");
    const iv  = Buffer.from(b[1], "hex");
    const enc = Buffer.from(c[1], "hex");
    const dec = crypto.createDecipheriv("aes-128-cbc", key, iv);
    dec.setAutoPadding(false);
    return Buffer.concat([dec.update(enc), dec.final()]).toString("hex");
  } catch { return null; }
}

// ── Raw HTTPS fetch (text) ────────────────────────────────────────────────────
function httpsGetText(urlPath, cookie) {
  return new Promise((resolve, reject) => {
    const headers = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120",
      "Accept": "application/json, */*",
    };
    if (cookie) headers["Cookie"] = "__test=" + cookie;
    const req = https.request(
      { hostname: CMS_HOST, path: urlPath, method: "GET", headers, rejectUnauthorized: false },
      (res) => { let body = ""; res.on("data", c => body += c); res.on("end", () => resolve(body)); }
    );
    req.on("error", reject);
    req.end();
  });
}

// ── Raw fetch (binary Buffer) — follows redirects ────────────────────────────
function fetchBinary(url) {
  return new Promise((resolve, reject) => {
    const lib    = url.startsWith("https") ? https : http;
    const parsed = new URL(url);
    const options = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "image/*,*/*",
        ...(cachedCookie && parsed.hostname === CMS_HOST ? { "Cookie": "__test=" + cachedCookie } : {}),
      },
      rejectUnauthorized: false,
    };
    const req = lib.request(options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchBinary(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on("data", c => chunks.push(c));
      res.on("end", () => resolve({ buf: Buffer.concat(chunks), contentType: res.headers["content-type"] ?? "" }));
    });
    req.on("error", reject);
    req.end();
  });
}

// ── CMS JSON request with challenge handling ──────────────────────────────────
async function cmsRequest(urlPath) {
  if (cachedCookie) {
    const body = await httpsGetText(urlPath, cachedCookie);
    if (!body.trimStart().startsWith("<")) return body;
    cachedCookie = null;
  }
  const challenge = await httpsGetText(urlPath);
  if (!challenge.trimStart().startsWith("<")) return challenge;
  const solved = solveAESChallenge(challenge);
  if (!solved) throw new Error("Failed to solve AES challenge");
  cachedCookie = solved;
  const body = await httpsGetText(urlPath, solved);
  if (body.trimStart().startsWith("<")) throw new Error("Still HTML after challenge solve");
  return body;
}

// ── Download a CMS image, save locally, return local path ────────────────────
const imageCache = new Map(); // url → local static path

async function downloadImage(url) {
  if (!url || !url.includes("mits-cms.freedev.app")) return url;
  if (imageCache.has(url)) return imageCache.get(url);

  try {
    const { buf, contentType } = await fetchBinary(url);
    // Skip if response is HTML (bot protection page)
    if (contentType.startsWith("text/html") || buf.length < 100) return url;

    // Derive extension from content-type or URL
    let ext = ".jpg";
    if (contentType.includes("png"))  ext = ".png";
    else if (contentType.includes("gif"))  ext = ".gif";
    else if (contentType.includes("webp")) ext = ".webp";
    else { const u = extname(url.split("?")[0]); if (u) ext = u; }

    const hash = crypto.createHash("md5").update(url).digest("hex").slice(0, 12);
    const filename = hash + ext;
    const filepath = join(IMG_DIR, filename);
    if (!existsSync(filepath)) writeFileSync(filepath, buf);

    const staticPath = STATIC_PREFIX + filename;
    imageCache.set(url, staticPath);
    return staticPath;
  } catch {
    return url; // keep original on failure
  }
}

// ── Rewrite all image URLs in a JSON object recursively ──────────────────────
async function rewriteImages(obj) {
  if (typeof obj === "string") {
    if (obj.includes("mits-cms.freedev.app") && /\.(jpg|jpeg|png|gif|webp)/i.test(obj)) {
      return await downloadImage(obj);
    }
    return obj;
  }
  if (Array.isArray(obj)) return Promise.all(obj.map(rewriteImages));
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) out[k] = await rewriteImages(v);
    return out;
  }
  return obj;
}

// ── Fetch a list endpoint ─────────────────────────────────────────────────────
async function fetchEndpoint(deptCode, endpoint) {
  const urlPath = `/backend/public_api/${endpoint}.php?dept=${encodeURIComponent(deptCode)}`;
  try {
    const text = await cmsRequest(urlPath);
    const json = JSON.parse(text);
    return json.success ? json : { success: false, [endpoint]: [] };
  } catch (e) {
    console.warn(`  WARN: ${endpoint} for ${deptCode}: ${e.message}`);
    return { success: false, [endpoint]: [] };
  }
}

// ── Fetch full event detail ───────────────────────────────────────────────────
async function fetchEventDetail(eventId) {
  const urlPath = `/backend/public_api/event_detail.php?id=${eventId}`;
  try {
    const text = await cmsRequest(urlPath);
    const json = JSON.parse(text);
    return json.success ? json : null;
  } catch (e) {
    console.warn(`  WARN: event_detail id=${eventId}: ${e.message}`);
    return null;
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  mkdirSync(IMG_DIR, { recursive: true });
  const outBase = join(__dirname, "public", "cms-data");

  for (const [deptKey, deptCode] of Object.entries(DEPT_CODES)) {
    console.log(`\n── ${deptKey} (${deptCode}) ──`);
    const deptDir = join(outBase, deptKey);
    mkdirSync(deptDir, { recursive: true });

    // 1. Fetch all list endpoints
    for (const endpoint of ENDPOINTS) {
      process.stdout.write(`  ${endpoint}... `);
      let data = await fetchEndpoint(deptCode, endpoint);
      data = await rewriteImages(data);
      writeFileSync(join(deptDir, `${endpoint}.json`), JSON.stringify(data));
      const count = (data[endpoint] ?? []).length;
      console.log(`${count} records`);
    }

    // 2. Fetch full detail for every event
    const eventsJson = JSON.parse(
      (await import("fs")).default.readFileSync(join(deptDir, "events.json"), "utf8")
    );
    const events = eventsJson.events ?? [];
    if (events.length > 0) {
      console.log(`  event details (${events.length} events)...`);
      for (const ev of events) {
        process.stdout.write(`    event ${ev.id}... `);
        let detail = await fetchEventDetail(ev.id);
        if (detail) {
          detail = await rewriteImages(detail);
          writeFileSync(join(deptDir, `event_${ev.id}.json`), JSON.stringify(detail));
          console.log("ok");
        } else {
          // Fallback: save the list-level event data as the detail
          writeFileSync(join(deptDir, `event_${ev.id}.json`), JSON.stringify({ success: true, event: ev }));
          console.log("fallback");
        }
      }
    }
  }

  console.log(`\nDone. Images downloaded: ${imageCache.size}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
