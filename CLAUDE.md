# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository overview

Official site of BEST Ekaterinburg UrFU (urfubest.ru / best.pukeko.online) — an Angular 21 standalone-components SPA with no backend/CMS. All content (text, member lists, project cards) lives directly in the source; images live in `public/images/`. The project was rewritten from a Create React App codebase to Angular; `INSTALL.md` and `NAVIGATION.md` at the repo root describe the old React version and are stale — don't follow them.

## Commands

```bash
npm install
npm start           # dev server at http://localhost:4200, hot-reload
npm run build        # production build -> dist/best-site/browser
npm run watch          # dev-config build in watch mode
npm test                 # vitest via @angular/build:unit-test
```

There is no lint script configured in `package.json`.

## Deployment

Full details in `DEPLOYMENT.md` (Russian). Summary:

- Production is a multi-stage `Dockerfile`: `node:22-alpine` runs `npm run build`, then the static output is copied into `nginx:alpine` and served via `nginx.conf` (SPA fallback to `index.html`, 1y cache on static assets, no-cache on HTML).
- `docker compose up -d --build` from this directory builds and (re)starts the container — `--build` is required after any change to `src/`, `public/`, or `package.json`, otherwise Docker reuses the cached image.
- The container joins the external `traefik` docker network (shared reverse proxy owned by another user on the host — don't touch its config) and is routed via Traefik labels in `docker-compose.yml` to `best.pukeko.online` with Let's Encrypt TLS. There's no root-level orchestration; this directory is deployed standalone.
- Verify a deploy with `docker logs best-ekaterinburg-app --tail 100` and `curl -s -o /dev/null -w "%{http_code}\n" https://best.pukeko.online/` (expect `200`).

## Architecture

- **Routing** (`src/app/app.routes.ts`): home is eager (`HomeComponent`), every other route (`/board`, `/aoa`, `/mark`, `**` → 404) is lazy-loaded via `loadComponent`.
- **i18n**: fully bilingual (ru/en) via a single `LanguageService` (`src/app/services/language.service.ts`) holding current `Language` in a `BehaviorSubject`, and one flat translation table `src/app/data/translations.ts` exporting `{ ru: {...}, en: {...} }` with identical key sets for both languages. Components read strings as `this.lang.t['someKey']`. **Any new key must be added to both `ru` and `en` blocks** or the missing language renders undefined/empty. Event-page content (`/aoa`, `/mark`) is namespaced with `aoa_*` / `mark_*` key prefixes inside the same file.
- **Content-as-code editing model** (no CMS): most content changes are edits to `translations.ts` (text), specific `*.component.ts` files (structural data — e.g. `board-members-list.component.ts` for the `boardMembers`/`nonBoardMembers` arrays, `projects.component.ts` for the `projects: Project[]` array), or files in `public/images/` (referenced by absolute path like `/images/foo.png`, copied as-is into the build per the `assets` glob in `angular.json`). Partner logos are flat PNGs (`public/images/Partners.png`, `public/images/mark/2023_partners.png`, etc.), not data-driven — edited as images, not code.
- **Styling**: Tailwind CSS (`tailwind.config.js`), `darkMode: "class"`, custom `sans` font family (Montserrat). Global styles in `src/styles.css`.
- Types shared across components live in `src/app/models/types.ts` (`BoardMember`, `SocialLink`, `Language`).
