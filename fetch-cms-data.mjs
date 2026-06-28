/**
 * fetch-cms-data.mjs
 * Run at build time (GitHub Actions) to pre-fetch all CMS data and write
 * static JSON files to public/cms-data/<DEPT>/<endpoint>.json
 * This eliminates all CORS issues on GitHub Pages.
 */
import https from "https";
import crypto from "crypto";
import { mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const DEPT_CODES = {
  cse:   "CSE",
  ce:    "CIVIL",
  eee:   "EEE",
  me:    "MECH",
  ece:   "ECE",
  ai:    "AI",
  aiml:  "AIML",
  cseds: "CSEDS",
  csecs: "CSECS",
};

const ENDPOINTS = ["events", "mous", "achievements", "patents", "publications", "placements", "projects"];

let cachedCookie = null;

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
  } catch {
    return null;
  }
}

function httpsGet(urlPath, cookie) {
  return new Promise((resolve, reject) => {
    const headers = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
      "Accept": "application/json, */*",
    };
    if (cookie) headers["Cookie"] = "__test=" + cookie;
    const req = https.request(
      { hostname: "mits-cms.freedev.app", path: urlPath, method: "GET", headers, rejectUnauthorized: false },
      (res) => {
        let body = "";
        res.on("data", (chunk) => { body += chunk; });
        res.on("end", () => resolve(body));
      }
    );
    req.on("error", reject);
    req.end();
  });
}

async function cmsRequest(urlPath) {
  if (cachedCookie) {
    const body = await httpsGet(urlPath, cachedCookie);
    if (!body.trimStart().startsWith("<")) return body;
    cachedCookie = null;
  }
  const challenge = await httpsGet(urlPath);
  if (!challenge.trimStart().startsWith("<")) return challenge;
  const solved = solveAESChallenge(challenge);
  if (!solved) throw new Error("Failed to solve AES challenge");
  cachedCookie = solved;
  const body = await httpsGet(urlPath, solved);
  if (body.trimStart().startsWith("<")) throw new Error("Still getting HTML after challenge solve");
  return body;
}

async function fetchEndpoint(deptCode, endpoint) {
  const urlPath = `/backend/public_api/${endpoint}.php?dept=${encodeURIComponent(deptCode)}`;
  try {
    const text = await cmsRequest(urlPath);
    const json = JSON.parse(text);
    return json.success ? json : { success: false, [endpoint]: [] };
  } catch (e) {
    console.warn(`  WARN: ${endpoint} for ${deptCode} failed: ${e.message}`);
    return { success: false, [endpoint]: [] };
  }
}

async function main() {
  const outBase = join(__dirname, "public", "cms-data");
  mkdirSync(outBase, { recursive: true });

  for (const [deptKey, deptCode] of Object.entries(DEPT_CODES)) {
    console.log(`Fetching ${deptKey} (${deptCode})...`);
    const deptDir = join(outBase, deptKey);
    mkdirSync(deptDir, { recursive: true });

    for (const endpoint of ENDPOINTS) {
      process.stdout.write(`  ${endpoint}... `);
      const data = await fetchEndpoint(deptCode, endpoint);
      writeFileSync(join(deptDir, `${endpoint}.json`), JSON.stringify(data));
      const count = (data[endpoint] ?? []).length;
      console.log(`${count} records`);
    }
  }

  console.log("Done. All CMS data written to public/cms-data/");
}

main().catch((e) => { console.error(e); process.exit(1); });
