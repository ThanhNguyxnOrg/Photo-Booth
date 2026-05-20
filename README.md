# Snapbooth

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=000)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=fff)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-live-222?logo=github)](https://thanhnguyxnorg.github.io/Photo-Booth/)

Privacy-first browser photo booth with a clean studio UI, curated presets, and static Pages deployment.

Live site: [https://thanhnguyxnorg.github.io/Photo-Booth/](https://thanhnguyxnorg.github.io/Photo-Booth/)

## What It Is

Snapbooth is a single-page React app that turns the browser into a photobooth workflow:

- intro screen before the studio
- webcam capture and upload fallback
- live filter preview
- layout, frame, caption, and text-scale presets
- PNG, GIF, boomerang GIF, and QR export
- front/rear camera switching
- demo roll for camera-less preview

The app stays browser-only unless you use the temporary QR share flow.

## Preset Snapshot

| Area | Count | Notes |
| --- | ---: | --- |
| Layouts | 5 | single, pair, strip, quad, contact |
| Frames | 19 | from Classic to Polaroid, Zine, and Archive |
| Filters | 24 | daylight, mono, film, mood, and lab groups |
| Captions | 24 | editorial, analog, playful, and minimal groups |

See the full catalog in [PRESET_CATALOG.md](./PRESET_CATALOG.md).

## Quick Start

```bash
npm install
npm run dev
```

For the Pages build:

```bash
npm run build
```

The production output is written to `docs/`, and GitHub Pages is configured from `main` + `docs/`.

For a local smoke pass against the preview build:

```bash
npm run test:e2e
```

## What Changed

- Rebuilt the old multi-page HTML app into one React/Vite experience
- Added the intro/landing screen before the studio
- Added caption presets, more frames, more filters, and live camera filter preview
- Added front/rear switching, demo roll generation, and boomerang GIF export
- Kept the core booth flow: layout, frame, filter, capture, develop, share
- Added Dependabot automation for patch/minor updates
- Published the app from GitHub Pages

## Repo Map

| File | Role |
| --- | --- |
| `src/App.tsx` | App flow, presets, capture, export |
| `src/styles.css` | Visual system and responsive layout |
| `docs/` | Generated Pages output |
| `PRESET_CATALOG.md` | Caption, frame, and filter reference |
| `CONTRIBUTING.md` | Branch, build, and review workflow |

## Research Sources

Ideas were selected from real photobooth projects instead of being invented blindly:

- [photobooth-app/photobooth-app](https://github.com/photobooth-app/photobooth-app)
- [PhotoboothProject/photobooth](https://github.com/PhotoboothProject/photobooth)
- [AungMyoKyaw/photo-booth](https://sveltethemes.dev/AungMyoKyaw/photo-booth)

## Deploy

- Default branch: `main`
- Pages source: `main` + `docs/`
- Live URL: [thanhnguyxnorg.github.io/Photo-Booth](https://thanhnguyxnorg.github.io/Photo-Booth/)

## Contributing

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before changing the repo.
