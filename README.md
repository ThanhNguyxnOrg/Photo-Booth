# Snapbooth

Privacy-first browser photo booth rebuilt around an editorial, analog studio UI.

Live site: [https://thanhnguyxnorg.github.io/Photo-Booth/](https://thanhnguyxnorg.github.io/Photo-Booth/)

## Run locally

```bash
npm install
npm run dev
```

## Build for GitHub Pages

```bash
npm run build
```

The production build outputs to `docs/` for Pages deployment.
GitHub Pages is published from `main` + `docs/`.

## What changed

- Rebuilt the old multi-page HTML app into a single React/Vite experience
- Added a proper intro/landing screen before the studio flow
- Kept the core booth flow: layout, frame, filter, capture, develop, share
- Added live filter preview, front/rear camera switching, demo roll generation, and boomerang GIF export
- Reworked the UI around the redesign assets from `Photobooth website.zip`
- Added Dependabot automation for safe patch/minor updates
- Updated git author to `RealThanhNguyxn <274720769+RealThanhNguyxn@users.noreply.github.com>`
- Pointed `origin` to `https://github.com/ThanhNguyxnOrg/Photo-Booth.git`
