#!/usr/bin/env node
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import serve from "serve";

// locate the dist folder shipped with the package
const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

// serve with single-page fallback on port 4173
serve(distDir, { port: 4173, single: true });
console.log(`Serving ${distDir} on http://localhost:4173`);
