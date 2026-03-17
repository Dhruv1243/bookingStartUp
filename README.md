# Portfolio Workspace

This repository contains two separate apps:

- `.`: Next.js frontend
- `portfolio-backend/`: Strapi CMS backend

## Structure

- `src/pages`: Next.js pages router
- `src/components`: frontend UI components
- `src/lib`: frontend auth and Strapi API helpers
- `src/data`: local development data used by Auth.js credentials auth
- `portfolio-backend/src`: Strapi backend source
- `portfolio-backend/src/api/site-config`: single type for homepage and nav content
- `portfolio-backend/src/api/project`: project collection for portfolio/project cards

## Frontend

Run the Next.js frontend from the repository root:

```bash
npm run dev:frontend
```

Build the frontend:

```bash
npm run build:frontend
```

## Backend

Run the Strapi backend:

```bash
npm run dev:backend
```

Build the Strapi admin:

```bash
npm run build:backend
```

By default Strapi runs on `http://localhost:1337`.

## CMS-driven content

The frontend now reads from Strapi with fallbacks:

- `site-config`: hero, nav items, feature links, greeting text
- `project`: repeated project cards on the landing page

Set `NEXT_PUBLIC_STRAPI_URL` in `.env.local` if your backend does not run on `http://localhost:1337`.

## Notes

- The frontend currently uses Auth.js credentials auth with local user storage in `src/data/users.json`.
- If Strapi is empty or offline, the frontend falls back to local default content so the UI still renders.
