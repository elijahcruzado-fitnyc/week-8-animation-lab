# CT390 Week 8: Animation Lab

**Live site:** https://elijahcruzado-fitnyc.github.io/week-8-animation-lab/
**Storybook:** https://elijahcruzado-fitnyc.github.io/week-8-animation-lab/storybook/

> Pages can't be enabled on this Classroom repo with student permissions (Settings → Pages isn't available), so the deploy job here fails at the last step even though the build passes. The identical code deploys from a personal mirror: https://github.com/elijahcruzado-fitnyc/week-8-animation-lab. Once Pages is turned on here, this repo will publish to https://fitnyc-ct390.github.io/rapid-prototyping-with-ai-week-8-elijahcruzado-fitnyc/ with no code changes.

Elijah Cruzado · Rapid Prototyping with AI · FIT · Fall 2026

A Next.js app in `animation-project/` with Storybook, trying four approaches from the Week 8 lightning round. Each animated component has its own story and is checked in Storybook before it goes on the page.

| Demo | Library | Component | Story |
| --- | --- | --- | --- |
| Hover transition and looping pulse | CSS (no library) | `components/HoverCard.tsx` | Animations / CSS Hover Card |
| Staggered cards and a draggable card | Motion | `components/MotionCards.tsx` | Animations / Motion Cards and Drag |
| Meshing gears that turn as you scroll | React Three Fiber + three | `components/Gears.tsx` | Animations / React Three Fiber Gears |
| Bar chart that animates when data changes | D3 | `components/BarChart.tsx`, `components/ChartDemo.tsx` | Animations / D3 Bar Chart |

## Run it locally

```
cd animation-project
npm install
npm run dev          # http://localhost:3000
npm run storybook    # http://localhost:6006
```

## Deploy

`.github/workflows/deploy-pages.yml` runs on every push to `main`: it builds the static export, builds Storybook into `out/storybook`, and publishes to GitHub Pages. Repo Settings → Pages → Source is set to GitHub Actions. The rules that keep the site static are in `AGENTS.md`.

## Prompt log

1. "Set up a Next.js app with Storybook in this week's repo, try the animation libraries from the lightning round, and deploy it." (Week 8 lab, steps 2 to 4)
2. Per demo: "Build a [CSS hover card / Motion stagger and drag / React Three Fiber gears that turn as you scroll / D3 bar chart that animates when its data changes] component in animation-project. Also write a Storybook story for it, then add it to the home page."
3. Deploy prompt (step 5), sent as written:
   > I want to put the Next.js app in my animation-project folder on GitHub Pages, which only hosts static files. Set it up so it deploys automatically with GitHub Actions every time I push to main, and include my Storybook too.
   > Then add the rules you followed to AGENTS.md at the root of my repo (create it if it doesn't exist), so you keep the site static and deployable in every future task.
4. "The gears are viewed edge on. Turn their faces toward the camera and keep the teeth in step."
5. "I can't access Settings → Pages on the Classroom repo. Deploy it from a repo on my personal account instead." (basePath now reads the repo name from GITHUB_REPOSITORY so the same code works in both repos.)
