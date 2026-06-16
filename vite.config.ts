import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";
import https from "https";
import crypto from "crypto";

function solveAESChallenge(html: string): string | null {
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

// Cache the solved cookie — valid for 6 hours per the CMS max-age
let cachedCookie: string | null = null;
let cacheExpiry = 0;

function httpsGet(urlPath: string, cookie?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const headers: Record<string, string> = {
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

async function cmsRequest(urlPath: string): Promise<string> {
  // Use cached cookie if still valid
  if (cachedCookie && Date.now() < cacheExpiry) {
    const body = await httpsGet(urlPath, cachedCookie);
    if (!body.trimStart().startsWith("<")) return body;
    // Cache expired early, clear it
    cachedCookie = null;
  }

  // Get a fresh challenge and solve it
  const challenge = await httpsGet(urlPath);
  if (!challenge.trimStart().startsWith("<")) return challenge;

  const solved = solveAESChallenge(challenge);
  if (!solved) throw new Error("Failed to solve AES challenge. HTML: " + challenge.slice(0, 150));

  // Cache for 5.5 hours (slightly under the 6h max-age)
  cachedCookie = solved;
  cacheExpiry = Date.now() + 5.5 * 60 * 60 * 1000;

  const body = await httpsGet(urlPath, solved);
  if (body.trimStart().startsWith("<")) throw new Error("Challenge not resolved after solving. Body: " + body.slice(0, 150));
  return body;
}

function cmsProxyPlugin() {
  return {
    name: "cms-proxy",
    configureServer(server: import("vite").ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith("/cms-api")) return next();
        const urlPath = "/backend/public_api" + req.url.slice("/cms-api".length);
        cmsRequest(urlPath)
          .then((body) => {
            res.setHeader("Content-Type", "application/json; charset=utf-8");
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.statusCode = 200;
            res.end(body);
          })
          .catch((err) => {
            console.error("[cms-proxy] Error:", err.message);
            res.statusCode = 502;
            res.end(JSON.stringify({ success: false, error: err.message }));
          });
      });
    },
  };
}

export default defineConfig(({ mode }) => ({
  base: "/MITS-Design1/",
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [
    react(),
    cmsProxyPlugin(),
    mode === "development" && componentTagger(),
    visualizer({
      filename: "dist/stats.html",
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-accordion",
            "@radix-ui/react-tabs",
            "@radix-ui/react-select",
            "@radix-ui/react-popover",
          ],
          motion: ["framer-motion"],
          query: ["@tanstack/react-query"],
          utils: ["clsx", "tailwind-merge", "class-variance-authority"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
}));
