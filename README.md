# VITELON

Single-page site for the VITELON / $VITELON community story. Routes are `/`, `/story`, and `/token`.

Published site: https://vitelon.site/

## Scripts

- `npm run dev` — local dev server at http://localhost:5173/
- `npm run build` — typecheck and production build (`dist`)
- `npm run typecheck` — `tsc -b`
- `npm run lint` — oxlint
- `npm test` — config and link-gate checks
- `npm run preview` — serve the production build

## GitHub Pages

Pushes to `main` on https://github.com/JackMiller825/VITELON run `.github/workflows/deploy-pages.yml`. That workflow builds `dist` and deploys it with GitHub Pages actions.

The repository’s Pages site uses the custom domain `vitelon.site`, so the app is served from the domain root. `public/CNAME` keeps that domain on each deploy. The build copies `index.html` to `404.html` so `/story` and `/token` load the app. A `.nojekyll` file keeps GitHub Pages from dropping files.

## Amplify SPA rewrite

If this app is later hosted on Amplify, add the rule in `amplify-rewrites.json`:

```json
{
  "source": "/<*>",
  "target": "/index.html",
  "status": "404-200",
  "condition": null
}
```

Build command: `npm ci && npm run build`. Output directory: `dist`.

## Confirmed facts

Edit only `src/data/siteConfig.ts`.

- Name: VITELON
- Ticker: $VITELON
- Network: Ethereum

## Still pending

Leave these blank until they are verified. The site will not turn them into links.

- `contractAddress`
- `totalSupply`
- `taxLp`
- `tradingUrl`
- `chartUrl`
- `xUrl`
- `telegramUrl`

The trade button stays disabled until both `contractAddress` and `tradingUrl` pass validation (a `0x` + 40 hex address, and an `https` URL).

## Assets

Copied into `public/assets/` from the supplied brand folder:

| File | Checked |
|---|---|
| `vitelon-logo-transparent.png` | PNG, 1024×1024, real transparency outside the mark |
| `vitelon-banner-3to1.png` | PNG, 1500×500, opaque social image |
| `vitelon-banner-1100x520.png` | PNG, 1100×520, opaque channel banner |

Favicon files in `public/` were resized from the transparent logo.

Not in the brand folder, so they are not referenced as images:

- `asset-manifest.json`
- `vitelon-mascot-wrestling-v2.png` (expected PNG, 1254×1254)

Scene frames say the wrestling artwork is missing. When that file is available, copy it to `public/assets/vitelon-mascot-wrestling-v2.png` and set `siteConfig.assets.mascot` to that path. Do not substitute the banner or the emotion stickers.
