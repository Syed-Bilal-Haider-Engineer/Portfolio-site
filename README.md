# Portfolio Website

A simple, Notion-style personal portfolio. Next.js (App Router) + TypeScript +
Tailwind CSS on the frontend, with a small Next.js API route as the backend
for the contact form.

## Stack

- **Frontend:** Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **Backend:** Next.js Route Handler (`app/api/contact/route.ts`) — validates
  and rate-limits contact form submissions

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Make it yours

Almost everything lives in **`data/content.ts`** — your name, bio, projects,
experience, skills, and writing links. Edit that one file first.

Other things to check:

- `app/layout.tsx` — page title & meta description
- `components/Contact.tsx` + `app/api/contact/route.ts` — the contact form
  and where submissions go (see the comment in `route.ts` for wiring up
  real email delivery with Resend, a webhook, or a database)
- `tailwind.config.ts` — colors and fonts, if you want a different palette

## Deploying

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) —
zero config needed. Any other Node host works too (`npm run build && npm run start`).
