#!/usr/bin/env bash
# Bootstrap gym-log on VPS next to other nginx sites.
# Usage (on server as root): bash bootstrap-vps.sh
set -euo pipefail

APP_DIR="${APP_DIR:-/opt/gym-log}"
REPO="${REPO:-https://github.com/ivanplat1/gym-log.git}"
NGINX_SNIPPET_DST="${NGINX_SNIPPET_DST:-/etc/nginx/snippets/gym-log.conf}"
SITE_CONF="${SITE_CONF:-}"

if [[ "$(id -u)" -ne 0 ]]; then
  echo "Run as root (or sudo)"
  exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "docker not found"
  exit 1
fi
if ! docker compose version >/dev/null 2>&1; then
  echo "docker compose not found"
  exit 1
fi

mkdir -p "$(dirname "$APP_DIR")"
if [[ ! -d "$APP_DIR/.git" ]]; then
  git clone "$REPO" "$APP_DIR"
fi
cd "$APP_DIR"
git fetch origin main
git checkout main
git pull --ff-only origin main

if [[ ! -f .env ]]; then
  cp .env.example .env
  # random secrets if still placeholders
  PASS="$(openssl rand -base64 18 | tr -d '/+=' | head -c 20)"
  SECRET="$(openssl rand -hex 32)"
  sed -i "s/^AUTH_PASSWORD=.*/AUTH_PASSWORD=${PASS}/" .env
  sed -i "s/^SESSION_SECRET=.*/SESSION_SECRET=${SECRET}/" .env
  echo "Wrote .env (AUTH_PASSWORD generated — see $APP_DIR/.env)"
fi

docker compose up -d --build

install -m 644 deploy/nginx-gym-log.conf "$NGINX_SNIPPET_DST"

# Try to include snippet into the first enabled site that looks like default/IndieRadar
if [[ -z "$SITE_CONF" ]]; then
  for f in /etc/nginx/sites-enabled/* /etc/nginx/conf.d/*.conf; do
    [[ -f "$f" ]] || continue
    if grep -qE 'listen\s+(80|443)' "$f" 2>/dev/null; then
      SITE_CONF="$f"
      break
    fi
  done
fi

if [[ -n "${SITE_CONF:-}" ]]; then
  if ! grep -q 'snippets/gym-log.conf' "$SITE_CONF"; then
    # insert include inside first server { ... } block before its closing brace — best-effort
    if grep -q 'include snippets/gym-log.conf' "$SITE_CONF"; then
      :
    else
      cp "$SITE_CONF" "${SITE_CONF}.bak.gym-log"
      # append include before last closing brace of file (common single-server confs)
      awk '
        BEGIN{done=0}
        /^}/ && !done {
          print "    include snippets/gym-log.conf;"
          done=1
        }
        {print}
      ' "$SITE_CONF" > "${SITE_CONF}.new" && mv "${SITE_CONF}.new" "$SITE_CONF"
      echo "Patched $SITE_CONF (backup: ${SITE_CONF}.bak.gym-log)"
    fi
  fi
else
  echo "WARNING: could not find nginx site conf — add manually:"
  echo "  include snippets/gym-log.conf;"
fi

nginx -t
systemctl reload nginx

echo "OK → http://$(hostname -I | awk '{print $1}')/gym-log/"
curl -sS -o /dev/null -w "local health: %{http_code}\n" http://127.0.0.1:8787/gym-log/api/health || true
curl -sS -o /dev/null -w "public path: %{http_code}\n" http://127.0.0.1/gym-log/ || true
