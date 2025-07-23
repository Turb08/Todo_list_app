#!/usr/bin/env node
import http from "http";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");
const port = process.env.PORT || 4173;

const mimeTypes = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};

const server = http.createServer(async (req, res) => {
  try {
    let reqPath = new URL(req.url, `http://${req.headers.host}`).pathname;
    if (reqPath === "/") reqPath = "/index.html";
    const filePath = path.join(distDir, reqPath);
    const data = await readFile(filePath);
    const ext = path.extname(filePath);
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
    });
    res.end(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      // SPA fallback
      const fallback = path.join(distDir, "index.html");
      const data = await readFile(fallback);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } else {
      res.writeHead(500);
      res.end("Internal Server Error");
    }
  }
});

server.listen(port, () => {
  console.log(`Serving PWA at http://localhost:${port}`);
});
