# gym-log

Трекер тренировок и питания. **Два рабочих варианта:**

| # | Где | URL | Данные | Логин |
|---|---|---|---|---|
| 1 | GitHub Pages | https://ivanplat1.github.io/gym-log/ | `localStorage` | нет |
| 2 | VPS | http://128.140.50.104:8787 | файл на диске | логин + пароль |

Pages остаётся как был (деплой через `.github/workflows/deploy-pages.yml`).  
VPS — Docker с API и cookie-сессией; если `/api/health` недоступен, UI сам уходит в локальный режим (как на Pages).

## VPS `128.140.50.104`

На сервере уже крутится IndieRadar на `:80` / `:443`. gym-log поднимаем **отдельно на порту 8787**.

```bash
git clone https://github.com/ivanplat1/gym-log.git
cd gym-log
cp .env.example .env
# AUTH_USER / AUTH_PASSWORD / SESSION_SECRET

docker compose up -d --build
ufw allow 8787/tcp   # если firewall закрывает порт
```

Открой: **http://128.140.50.104:8787** → вход (`ivan` + пароль из `.env`).

Данные: Docker volume `gym-log-data`.  
Пример nginx (опционально): `deploy/nginx-gym-log.conf`.

За reverse-proxy с HTTPS: `COOKIE_SECURE=1`.

Смена пароля: удали `/data/users.json` в volume (или осторожно `docker compose down -v`) и перезапусти с новым `AUTH_PASSWORD`.

## GitHub Pages

https://ivanplat1.github.io/gym-log/  

Сборка с `base: /gym-log/`. Без сервера — только `localStorage`, экран входа не показывается.

## Локальная разработка

```bash
# терминал 1 — API
cd server && npm install && AUTH_PASSWORD=secret npm run dev

# терминал 2 — UI (прокси /api → :8787)
npm install && npm run dev
```

## Возможности

- Тренировки: степперы, отдых, прошлые подходы
- Питание: пресеты, граммовка, свои блюда, цели по BMR
- Прогресс: графики объёма и силы
- Журнал сессий
