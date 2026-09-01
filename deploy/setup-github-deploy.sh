#!/usr/bin/env bash
# Одноразовая настройка SSH для GitHub Actions → VPS.
#
# На своём компьютере:
#   ssh-keygen -t ed25519 -f gym-log-deploy -N ""
#   cat gym-log-deploy.pub   # → на сервер (этот скрипт)
#   cat gym-log-deploy       # → GitHub Secrets → VPS_SSH_KEY
#
# На VPS (root):
#   bash deploy/setup-github-deploy.sh "ssh-ed25519 AAAA... comment"
#
# В GitHub → Settings → Secrets → Actions:
#   VPS_HOST = 128.140.50.104
#   VPS_USER = root
#   VPS_SSH_KEY = содержимое приватного ключа
set -euo pipefail

PUBKEY="${1:-}"
USER="${DEPLOY_USER:-root}"
AUTH_KEYS="/root/.ssh/authorized_keys"

if [[ -z "$PUBKEY" ]]; then
  echo "Usage: $0 \"ssh-ed25519 AAAA...\""
  exit 1
fi

if [[ "$(id -u)" -ne 0 ]]; then
  echo "Run as root"
  exit 1
fi

mkdir -p /root/.ssh
chmod 700 /root/.ssh
touch "$AUTH_KEYS"
chmod 600 "$AUTH_KEYS"

MARKER="# gym-log-github-actions"
if grep -qF "$MARKER" "$AUTH_KEYS" 2>/dev/null; then
  sed -i "/$MARKER/,+1d" "$AUTH_KEYS"
fi

{
  echo "$MARKER"
  echo "$PUBKEY"
} >> "$AUTH_KEYS"

echo "OK: deploy key added for GitHub Actions"
echo "Next: add VPS_HOST, VPS_USER, VPS_SSH_KEY to GitHub repository secrets"
