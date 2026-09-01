#!/usr/bin/env bash
# Быстрое обновление UI на VPS (systemd + статика в dist/).
# Запуск на сервере: sudo bash deploy/update-vps.sh
set -euo pipefail

APP_DIR="${APP_DIR:-/opt/gym-log}"
SERVICE="${SERVICE:-gym-log}"

cd "$APP_DIR"
git fetch origin main
git checkout main
git pull --ff-only origin main

npm ci
VITE_BASE=/gym-log/ npm run build

if systemctl is-active --quiet "$SERVICE" 2>/dev/null; then
  systemctl restart "$SERVICE"
  echo "OK: restarted $SERVICE"
elif docker compose version >/dev/null 2>&1 && [[ -f docker-compose.yml ]]; then
  docker compose up -d --build
  echo "OK: docker compose rebuilt"
else
  echo "Built dist/. Restart $SERVICE manually if needed."
fi

curl -sS -o /dev/null -w "health: %{http_code}\n" http://127.0.0.1:8791/gym-log/api/health \
  || curl -sS -o /dev/null -w "health: %{http_code}\n" http://127.0.0.1:8787/gym-log/api/health \
  || true
