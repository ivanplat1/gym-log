# gym-log

Трекер тренировок и питания. Можно крутить на GitHub Pages (локальные данные) или на своём VPS с логином и серверным хранением.

## Режимы

| Где | Данные | Логин |
|---|---|---|
| GitHub Pages | `localStorage` | нет |
| VPS (Docker) | файл на диске сервера | логин + пароль |

## VPS (рекомендуется)

```bash
cp .env.example .env
# отредактируй AUTH_USER / AUTH_PASSWORD / SESSION_SECRET

docker compose up -d --build
```

Открой `http://VPS_IP:8787` → вход → данные пишутся в volume `gym-log-data`.

За nginx/Caddy с HTTPS поставь `COOKIE_SECURE=1`.

Смена пароля: удали `/data/users.json` в volume (или `docker compose down -v` осторожно) и перезапусти с новым `AUTH_PASSWORD`.

## Локальная разработка

```bash
# терминал 1 — API
cd server && npm install && AUTH_PASSWORD=secret npm run dev

# терминал 2 — UI (прокси /api → :8787)
npm install && npm run dev
```

## GitHub Pages

По-прежнему: https://ivanplat1.github.io/gym-log/  
Без сервера приложение работает локально (без экрана входа).

## Возможности

- Тренировки: степперы, отдых, прошлые подходы
- Питание: пресеты, граммовка, свои блюда, цели по BMR
- Прогресс: графики объёма и силы
- Журнал сессий
