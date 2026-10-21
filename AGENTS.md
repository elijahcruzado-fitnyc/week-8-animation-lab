# AGENTS.md

Standing rules for any agent working in this repo (Codex, Claude Code, or other).

## What this repo is

CT390 Week 8 animation lab. The Next.js app lives in `animation-project/`. It is deployed to GitHub Pages by `.github/workflows/deploy-pages.yml` on every push to `main`, with Storybook published at `/storybook/` inside the same site.

Live site: https://elijahcruzado-fitnyc.github.io/week-8-animation-lab/
Storybook: https://elijahcruzado-fitnyc.github.io/week-8-animation-lab/storybook/

The same code is pushed to two repos: the Classroom repo (fitnyc-ct390/rapid-prototyping-with-ai-week-8-elijahcruzado-fitnyc) for grading, and a personal mirror (elijahcruzado-fitnyc/week-8-animation-lab) where Pages is enabled. Students don't have admin on the Classroom repo, so Pages can't be turned on there until an instructor does it. Once it is, the Classroom site will be at https://fitnyc-ct390.github.io/rapid-prototyping-with-ai-week-8-elijahcruzado-fitnyc/

## Keep the site static and deployable

GitHub Pages only hosts static files. Every change must still pass `npm run build` as a static export.

1. Keep `output: "export"` in `animation-project/next.config.ts`. Do not remove it.
2. Keep `basePath` set to `/<repo-name>` in production, read from `GITHUB_REPOSITORY` in Actions. Pages serves the site from that subpath; without it every asset 404s. Do not hard-code one repo name.
3. Keep `images: { unoptimized: true }`. The Next image optimizer needs a server.
4. Keep `trailingSlash: true` so each route exports as `route/index.html`.
5. No server features: no API routes (`app/api`), no Route Handlers that run per request, no Server Actions, no middleware or proxy, no `cookies()`, `headers()` or other dynamic server functions, no ISR or `revalidate`, no dynamic routes without `generateStaticParams`.
6. Anything using `window`, `document`, WebGL, or animation libraries goes in a Client Component (`"use client"`).
7. Use `next/link` and `next/image` for internal links and images so `basePath` is applied. For a hard-coded asset path, prefix it with the base path.
8. No secrets or API keys in the code. Anything shipped to Pages is public.
9. Storybook must keep building with `npx storybook build -o out/storybook`. Every animated component gets a story in `animation-project/stories/` and is checked there before it goes into a page.
10. The deploy workflow writes `out/.nojekyll`. Keep that step so Pages serves the `_next` folder.
11. Commit `package-lock.json`. The workflow uses `npm ci`, which needs it.
12. Before pushing, run `npm run build` inside `animation-project/` and fix any error it reports.

## Repo conventions

- Commit messages say what changed. Not "update".
- Log the prompts sent to the agent in `README.md` under "Prompt log".
