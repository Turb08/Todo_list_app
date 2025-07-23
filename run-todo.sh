#!/usr/bin/env bash
# run-todo.sh — spin up the Todo PWA with one command

# Exit on error
set -e

# If someone hasn’t got Node.js, warn and exit
if ! command -v node >/dev/null 2>&1; then
  echo "Error: Node.js is not installed. Please install Node.js (v14+) and try again."
  exit 1
fi

# Use npx to invoke your published CLI
echo "Starting Todo PWA on http://localhost:4173 …"
npx turb-todo-list-app
