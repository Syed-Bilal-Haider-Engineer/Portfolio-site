# Portfolio Website

A bilingual (English / Deutsch) personal portfolio. Next.js (App Router) + TypeScript +
Tailwind CSS.

## Stack

- **Frontend:** Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **i18n:** EN/DE toggle in the header (persisted in `localStorage`)
- **Backend:** Next.js Route Handler (`app/api/contact/route.ts`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Make it yours

- `data/en.ts` — English copy
- `data/de.ts` — German copy
- `data/shared.ts` — links, logos, skill/article icons, dates
- Course outline: `app/courses/http-rest/page.tsx` (fill the dashed note blocks)

## Deploying

Push to GitHub and import the repo on [Vercel](https://vercel.com/new).
