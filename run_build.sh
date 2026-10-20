#!/usr/bin/env bash
# Pull the latest changes, rebuild the site and restart it under sm2.
#
# Usage: ./run_build.sh
# Override defaults with env vars, e.g. BRANCH=main PORT=3000 ./run_build.sh
set -euo pipefail

APP_NAME="${APP_NAME:-abdorizak.dev}"
BRANCH="${BRANCH:-main}"
PORT="${PORT:-3000}"
APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$APP_DIR"

for bin in git bun sm2; do
  if ! command -v "$bin" >/dev/null 2>&1; then
    echo "✗ '$bin' is not installed or not on PATH" >&2
    exit 1
  fi
done

echo "→ Pulling latest changes from origin/$BRANCH"
git fetch origin "$BRANCH"
git checkout "$BRANCH"
git pull --ff-only origin "$BRANCH"

echo "→ Installing dependencies"
bun install --frozen-lockfile

echo "→ Building"
bun run build

if sm2 describe "$APP_NAME" >/dev/null 2>&1; then
  echo "→ Restarting $APP_NAME"
  sm2 restart "$APP_NAME"
else
  echo "→ Starting $APP_NAME on port $PORT"
  # After a reboot systemd starts sm2 without our shell's PATH, so pin bun's
  # absolute path and hand the app this PATH (node from nvm, bun, …).
  sm2 start "$APP_NAME" --restart always --dir "$APP_DIR" \
    -e PORT="$PORT" -e NODE_ENV=production -e PATH="$PATH" \
    -- "$(command -v bun)" run start
fi

# Snapshot the process list so it comes back after a reboot.
sm2 save
sm2 status
