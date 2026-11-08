# Mirrorlight Studio website

Source for https://mirrorlightstudio.github.io (React + Tailwind + shadcn/ui).
The page is prerendered to plain HTML, so it needs no JavaScript and `#privacy` works for store reviewers.

Edit `src/App.jsx`, then:

    cd web
    npm install
    npm run build    # writes index.html, assets/ and img/ to the repo root

Commit everything except `web/node_modules`, `web/dist`, `web/dist-ssr`.
Keep `app-ads.txt` at the repo root (AdMob checks it).
