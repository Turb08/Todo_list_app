#!/usr/bin/env bash
set -e

IMAGE="your-dockerhub-username/todo-list-app:latest"

echo "Pulling $IMAGE…"
docker pull "$IMAGE"

echo "Running container (http://localhost:4173 → http://localhost:80 in container)…"
docker run -it --rm -p 4173:80 "$IMAGE"
