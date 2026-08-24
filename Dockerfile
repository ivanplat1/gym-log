# syntax=docker/dockerfile:1

FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY index.html vite.config.ts tsconfig*.json ./
COPY public ./public
COPY src ./src
ARG VITE_BASE=/gym-log/
ENV VITE_BASE=$VITE_BASE
RUN npm run build

FROM node:22-alpine AS server
WORKDIR /app
COPY server/package.json ./server/package.json
WORKDIR /app/server
RUN npm install --omit=dev
COPY server/src ./src
COPY --from=build /app/dist /app/dist
ENV NODE_ENV=production
ENV PORT=8787
ENV STATIC_DIR=/app/dist
ENV DATA_DIR=/data
ENV APP_BASE=/gym-log
# compose/VPS по HTTP: COOKIE_SECURE=0; за HTTPS-прокси — 1
ENV COOKIE_SECURE=0
EXPOSE 8787
VOLUME ["/data"]
CMD ["node", "src/index.js"]
