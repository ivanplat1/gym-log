# gym-log

Трекер тренировок и питания. **Два рабочих варианта:**

| # | Где | URL | Данные | Логин |
|---|---|---|---|---|
| 1 | GitHub Pages | https://ivanplat1.github.io/gym-log/ | `localStorage` | нет |
| 2 | VPS (path) | http://128.140.50.104/gym-log/ | файл на диске | логин + пароль |

На общем IP уже есть IndieRadar и др. на `:80`/`:443` — gym-log **не занимает порт снаружи**, только path `/gym-log/` через nginx → Docker на `127.0.0.1:8787`.

Pages остаётся как был (`.github/workflows/deploy-pages.yml`).  
Если `/gym-log/api/health` недоступен (как на Pages), UI сам уходит в локальный режим.

## VPS `128.140.50.104/gym-log/`

```bash
git clone https://github.com/ivanplat1/gym-log.git
cd gym-log
cp .env.example .env
# AUTH_USER / AUTH_PASSWORD / SESSION_SECRET

docker compose up -d --build
```

В nginx (рядом с остальными location) добавь фрагмент из `deploy/nginx-gym-log.conf`, затем:

```bash
nginx -t && systemctl reload nginx
```

Открой: **http://128.140.50.104/gym-log/** → вход (`ivan` + пароль из `.env`).

Проверка API: `curl -s http://127.0.0.1:8787/gym-log/api/health`

Данные: volume `gym-log-data`.  
За HTTPS-прокси: `COOKIE_SECURE=1`.

Смена пароля: удали `/data/users.json` в volume (или осторожно `docker compose down -v`) и перезапусти с новым `AUTH_PASSWORD`.

### Автодеплой (GitHub Actions)

После merge в `main` VPS обновляется сам (workflow `.github/workflows/deploy-vps.yml`), **если** в репозитории заданы secrets:

| Secret | Пример |
|---|---|
| `VPS_HOST` | `128.140.50.104` |
| `VPS_USER` | `root` |
| `VPS_SSH_KEY` | приватный ключ `ed25519` |

Одноразово на сервере:

```bash
ssh-keygen -t ed25519 -f gym-log-deploy -N ""
ssh root@128.140.50.104 "bash /opt/gym-log/deploy/setup-github-deploy.sh \"$(cat gym-log-deploy.pub)\""
# приватный ключ: cat gym-log-deploy → GitHub Secret VPS_SSH_KEY
```

Ручной деплой (если нужен): `bash deploy/update-vps.sh` на VPS или кнопка **Run workflow** → Deploy VPS.

## GitHub Pages

https://ivanplat1.github.io/gym-log/  

Сборка с `base: /gym-log/`. Без сервера — только `localStorage`, экран входа не показывается.

## Локальная разработка

```bash
# терминал 1 — API (без APP_BASE, слушает /api)
cd server && npm install && AUTH_PASSWORD=secret npm run dev

# терминал 2 — UI (vite proxy /gym-log/api → :8787/api)
npm install && npm run dev
```

## Возможности

- Тренировки: степперы, отдых, прошлые подходы
- Питание: пресеты, граммовка, свои блюда, цели по BMR
- Прогресс: графики объёма и силы
- Журнал сессий
