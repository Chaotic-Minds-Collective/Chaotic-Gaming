# Chaotic Gaming

Community built by gamers, for gamers.

A Chaotic Minds Collective division. Live at https://chaotic-gaming.vercel.app

The site is the front door to the community: it introduces the division, lists the games with their server status, and funnels visitors into the Discord, where the community actually lives.

## Stack

- Next.js 14 (routes under `app/`), React 18, TypeScript
- Tailwind CSS 3 for styling
- Deployed on Vercel (auto-deploys from `main`)
- No database and no server-side state: shared static data lives in `lib/`, and route content (page copy) lives in `app/`

## Site structure

| Route | Purpose |
| --- | --- |
| `/` | Hero, founding-member pitch, game marquee, how-to-join steps |
| `/about` | What the division is and how it relates to the Collective |
| `/games` | Game list with per-game blurbs and status badges |
| `/discord` | Discord invite and community rules/onboarding info |
| `/events` | Community events (game nights, contests) |
| `/support` | Ways to support the community |

## Key files

- `lib/site.ts` - site-wide constants: `DISCORD_INVITE` (invite link), `BADGE` and `FAVICON` (image URLs)
- `lib/games.ts` - the game catalog. Each entry has a `slug`, `name`, `genre`, `blurb`, a `status` of `online`, `coming-soon`, or `planned`, and `serverInfo` notes kept as catalog data (not currently rendered on the site). To add or change a game's status, edit this file.
- `app/` - one folder per route plus `layout.tsx` (shared shell) and `globals.css`

## Brand assets

The crest badge (`badge-v3-bold-cyan.png`) and icon (`icon-only.png`) currently sit in the repo root and are served via `raw.githubusercontent.com` URLs from `lib/site.ts`. This works, but hotlinking is fragile; if the assets ever move or the repo is renamed, the site images break. A future improvement is moving them into a `public/` folder and referencing them locally (`/badge-v3-bold-cyan.png`).

## Local development

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Deployment

Vercel deploys every push to `main`. There are no environment variables and no secrets in this repo.

## Community servers

Game servers (7 Days to Die, ARK, Atlas, Palworld, Valheim, Minecraft, Space Engineers, Soulmask, Conan Exiles) are community-voted: members decide which launch first, plus rates and rules, in the Discord. Server infrastructure plans live with the division, not in this repo.

## Related

- Parent organization: Chaotic Minds Collective (see the central handbook)
- Discord: https://discord.gg/SPJ42PCAvD
