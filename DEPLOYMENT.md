# Деплой и редактирование контента — best.pukeko.online

Этот файл описывает, как устроен деплой сайта BEST Екатеринбург УрФУ и как менять контент. Дополняет `README.md` (там — общее описание проекта и стек).

## 1. Как всё устроено

```
Интернет ──▶ Traefik (core-modules-proxy-1, порты 80/443)
                 │  Host(`best.pukeko.online`) + TLS (Let's Encrypt)
                 ▼
           best-ekaterinburg-app (nginx:alpine, порт 80 внутри контейнера)
                 │  раздаёт статику из /usr/share/nginx/html
                 ▼
           Angular-сборка (dist/best-site/browser)
```

### Ключевые файлы

| Файл | Назначение |
|---|---|
| `Dockerfile` | Многостадийная сборка: `node:22-alpine` собирает Angular (`npm run build`) → результат копируется в `nginx:alpine` |
| `nginx.conf` | Конфиг nginx внутри контейнера: SPA-роутинг (`try_files ... /index.html`), кэширование статики, security-заголовки |
| `docker-compose.yml` | Описывает сервис `app`, подключает его к внешней docker-сети `traefik`, задаёт лейблы для Traefik |

### Traefik и сеть

Реверс-прокси на сервере — **общий**, принадлежит другому пользователю (`a123`, конфиг в `/home/a123/core-modules/`, контейнер `core-modules-proxy-1`). Мы туда не лезем и ничего там не редактируем — сайт подключается к нему только через:

1. Внешнюю docker-сеть `traefik` (не путать с `traefik_default` — она пустая и не используется):
   ```yaml
   networks:
     traefik:
       external: true
   ```
2. Лейблы на контейнере `app`:
   ```yaml
   labels:
     - "traefik.enable=true"
     - "traefik.http.routers.best-site.entryPoints=https"
     - "traefik.http.routers.best-site.tls=true"
     - "traefik.http.routers.best-site.tls.options=default"
     - "traefik.http.routers.best-site.tls.certresolver=letsEncrypt"
     - "traefik.http.routers.best-site.rule=Host(`best.pukeko.online`)"
     - "traefik.http.services.best-site.loadbalancer.server.port=80"
     - "traefik.docker.network=traefik"
   ```

Traefik сам обнаруживает контейнер по этим лейблам (Docker provider) и сам выпускает/обновляет сертификат Let's Encrypt для домена в `rule=Host(...)` — вручную ничего заказывать не нужно.

### DNS

`best.pukeko.online` — A-запись, управляется в панели регистратора (reg.ru, NS: `ns1.reg.ru` / `ns2.reg.ru`), указывает на IP сервера `188.226.68.130`. Если понадобится завести ещё один поддомен — добавляется точно так же там же.

## 2. Как поднять / перезапустить / обновить сайт

Все команды — из директории `new-best-site/`.

```bash
# Собрать образ и (пере)запустить контейнер
docker compose up -d --build

# Посмотреть логи (например, если сайт не открывается)
docker logs best-ekaterinburg-app --tail 100

# Остановить
docker compose down
```

`--build` обязателен после любых изменений в `src/`, `public/`, `package.json` — иначе Docker переиспользует старый закэшированный образ и правки не попадут на сайт.

### Проверить, что сайт реально обновился

```bash
docker compose up -d --build
curl -s -o /dev/null -w "%{http_code}\n" https://best.pukeko.online/
```

Должно быть `200`. Если нет — смотрите `docker logs best-ekaterinburg-app`.

## 3. Как редактировать контент

Сайт на Angular (standalone components, без backend/CMS) — весь контент лежит прямо в коде и картинках репозитория. После любой правки нужно пересобрать и передеплоить (см. раздел 2), просто отредактировать файл на сервере недостаточно — правки применяются только через `docker compose up -d --build`.

### 3.1 Тексты (главный способ редактировать контент)

Почти весь текст сайта — в одном файле:

```
src/app/data/translations.ts
```

Файл содержит два объекта — `ru` и `en` — с одинаковым набором ключей. Меняете значение под нужным ключом в обоих блоках (или в одном, если хотите разный текст на языках):

```ts
export const translations = {
  ru: {
    heroTitle: "МОСТ",              // заголовок на главной
    aboutDescription: "...",         // текст блока "О нас"
    projectsTitle: "ПРОЕКТЫ",
    // ...
  },
  en: {
    heroTitle: "BEST",
    // ...
  }
};
```

Переключение языка на сайте работает через `LanguageService` (`src/app/services/language.service.ts`) — трогать его не нужно, он просто выбирает `ru`/`en` объект по кнопке в хедере.

**Важно:** ключ должен существовать в обоих языковых блоках (`ru` и `en`) — если добавляете новый ключ, добавляйте сразу в оба, иначе на одном из языков будет пусто/undefined.

### 3.2 Состав совета (страница `/board`)

Файл: `src/app/board/board-members-list.component.ts`

Два массива — `boardMembers` и `nonBoardMembers`. Каждый элемент:

```ts
{
  id: 1,
  name: this.lang.t['president'],        // имя — берётся из translations.ts
  position: 'President',                  // должность (техническая, не переводится)
  role: this.lang.t['presidentRole'],     // описание роли — тоже из translations.ts
  board: this.lang.t['boardXXII'],
  image: '/images/Nika.jpg',              // фото — файл в public/images/
  social: [
    { type: 'vk', url: 'https://vk.com/...', icon: 'vk' },
    { type: 'telegram', url: 'https://t.me/...', icon: 'telegram' },
  ]
}
```

Чтобы поменять человека на позиции:
1. Добавьте/замените фото в `public/images/` (см. 3.4).
2. Поменяйте имя и роль в `translations.ts` (ключи `president`, `presidentRole` и т.п. — по одному на каждую позицию, для ru и en).
3. Поменяйте `image` и `social` прямо в `board-members-list.component.ts`.

Чтобы добавить/убрать человека — добавьте/удалите объект в массиве (не забудьте уникальный `id`).

### 3.3 Партнёры (страница `/`, блок "Наши партнёры")

Файл: `src/app/partners/partners.component.ts`

Это не список карточек, а **одна картинка**:
```html
<img src="/images/Partners.png" ... />
```
Чтобы изменить логотипы партнёров, нужно отредактировать/пересобрать саму картинку `public/images/Partners.png` в графическом редакторе и заменить файл. Через код это не редактируется.

Похожая ситуация с логотипами партнёров на страницах мероприятий (`/aoa`, `/mark`) — там тоже отдельные PNG-файлы (`public/images/mark/2023_partners.png` и т.п.), подключённые как обычные `<img>` в `aoa.component.ts` / `markhack.component.ts`.

### 3.4 Проекты (карточки на главной, блок "Проекты")

Файл: `src/app/projects/projects.component.ts`

Массив `projects: Project[]` в конце файла — у каждого элемента `image`, `title`, `subtitle`, `description`, `link`/`buttonColor`. Названия и описания опять же идут через `this.lang.t['...']`, то есть основной текст меняется в `translations.ts`, а картинка и ссылка — прямо здесь.

### 3.5 Страницы мероприятий: Art of Arch (`/aoa`) и Mark Hack (`/mark`)

Файлы: `src/app/aoa/aoa.component.ts`, `src/app/markhack/markhack.component.ts`

Это самые "текстовые" компоненты — весь контент (таймлайн по годам, FAQ) вынесен в `translations.ts` под префиксами `aoa_*` и `mark_*` (например `aoa_2023_title`, `aoa_faq1_q`). Правите там же, где и остальные тексты. Слайд-шоу фотографий события задаётся прямо в шаблоне компонента:
```html
<app-slideshow [images]="['/images/aoa/1.jpg', '/images/aoa/2.jpg', '/images/aoa/3.jpg']"></app-slideshow>
```
Чтобы добавить/убрать фото в слайдшоу — добавьте файл в `public/images/aoa/` (или `mark/`) и пропишите путь в этом массиве.

### 3.6 Картинки (общее)

Все изображения сайта лежат в `public/images/`. Именно оттуда Angular копирует их в сборку "как есть" (см. `angular.json` → `assets`). Чтобы заменить/добавить картинку:
1. Положите файл в `public/images/` (или подпапку `aoa/`, `mark/`).
2. Пропишите путь вида `/images/имя-файла.ext` в соответствующем компоненте (или замените существующий путь, если хотите оставить то же имя файла — тогда код трогать не нужно, достаточно перезаписать файл).
3. Пересоберите сайт (`docker compose up -d --build`).

### 3.7 Контакты и соцсети в футере/хедере

Файл: `src/app/footer/footer.component.ts` (и `header/header.component.ts` для навигации).

Текст футера (название `МОСТ`/`BEST`, описание организации, подпись "Контакты для связи", копирайт) берётся из `translations.ts` — ключи `footerBrand`, `footerDescription`, `footerContactsLabel`, `footerCopyright`. Год в копирайте (`© {{ currentYear }} ...`) считается автоматически в компоненте, его менять не нужно.

Сами ссылки на Telegram-чат, e-mail, VK прописаны напрямую в HTML-шаблоне `footer.component.ts` (`href="..."`), не через `translations.ts` — их правите прямо там.

## 4. Типичный сценарий: "поменяйте текст/фото"

1. Отредактировать нужный файл (`translations.ts` для текста, `public/images/...` для картинок, конкретный `*.component.ts` для структуры/ссылок).
2. `cd new-best-site && docker compose up -d --build`
3. Проверить `https://best.pukeko.online/` в браузере (Ctrl+F5, чтобы сбросить кэш — nginx отдаёт HTML с `no-cache`, но статику `js/css/картинки` кэширует на год через `expires 1y`, так что после смены картинки с тем же именем файла может понадобиться жёсткий рефреш).

## 5. Локальная разработка (без Docker)

```bash
npm install
npm start        # http://localhost:4200, hot-reload
```
Так можно быстро проверять правки текста/вёрстки в браузере до полной пересборки Docker-образа.
