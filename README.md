# BEST Екатеринбург УрФУ — urfubest.ru

Официальный сайт локальной группы BEST (Board of European Students of Technology) в УрФУ, Екатеринбург. Также известна как МОСТ (Молодежная организация студентов-технологов).

Сайт рассказывает о деятельности организации, её проектах, команде и партнёрах.

## Технологии

- **Angular 21** — Standalone components, без NgModules
- **TypeScript 5.9** — строгий режим
- **Tailwind CSS 3.4** — стилизация
- **Vitest** — тестирование
- **Docker + Nginx + Traefik** — деплой

## Страницы

| Путь | Описание |
|------|----------|
| `/` | Главная — hero с ротацией текста, о нас, проекты, партнёры |
| `/board` | Состав совета XXIII |
| `/aoa` | Art of Arch — мероприятие с лентой лет и FAQ |
| `/mark` | Mark Hack — хакатон по маркетингу |
| `**` | 404 |

## Разработка

**Требования:** Node.js 22+, npm 11+

```bash
npm install
npm start          # dev-сервер на http://localhost:4200
npm run build      # production-сборка
npm test           # тесты
```

## Перевод

Сайт полностью двуязычный — русский и английский. Переключение через кнопку в хедере. Строки хранятся в `src/app/data/translations.ts`, состояние языка — в `LanguageService`.

## Деплой

Production-сборка запускается через Docker:

```bash
docker compose up -d --build
```

`--build` обязателен после любых изменений в `src/`, `public/`, `package.json` — без него Docker переиспользует старый закэшированный образ.

Nginx раздаёт статику из `dist/best-site/browser`, SPA-роутинг настроен через `try_files`. Трафик идёт через Traefik с Let's Encrypt. Подробности деплоя, редактирования контента и локальной разработки — в `DEPLOYMENT.md`.

---

© 2025 Copyright: BEST Ekaterinburg UrFU
