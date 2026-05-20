# Contributing

## Branch flow

- Create a branch per task.
- Keep changes scoped to the smallest useful slice.
- Avoid mixing UI work, docs work, and history rewrite work unless they are part of one fix.

## Local checks

```bash
npm install
npm run build
npm run test:e2e
```

Run the build and smoke test before pushing. This project publishes the production build from `docs/`.

If Playwright asks for browsers on a new machine, run `npx playwright install chromium` once.

## Before opening a PR

- Verify the app still loads in the browser.
- Check the intro screen, studio flow, and export flow.
- Confirm the GitHub Pages URL still resolves.
- Keep the default branch deployable.

## Repo conventions

- Commit author should stay consistent with the configured Git identity.
- Preserve commit timestamps if you ever need to rewrite history.
- Keep README and catalog docs updated when presets or flows change.

## Review checklist

- Does the change improve the booth flow?
- Does it keep the privacy-first browser-only model intact?
- Is the UI still readable on mobile?
- Did the generated `docs/` output get refreshed?
