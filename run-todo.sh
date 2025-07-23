#!/usr/bin/env bash
# run-todo.sh — build & preview the Todo PWA

set -e

# 1) Make sure deps are installed
if [ ! -d node_modules ]; then
  echo "Installing dependencies…"
  pnpm install
fi

# 2) Build the production bundle
echo "Building…"
pnpm run build

# 3) Preview with Vite’s static server
echo "Serving on http://localhost:4173 (respecting base path)…"
pnpm run preview
