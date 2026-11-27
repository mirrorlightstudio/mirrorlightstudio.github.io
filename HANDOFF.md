# Handoff  (updated 2026-11-27)

How to edit and rebuild the site: see **web/README.md**. This file is where things stand.

## Where things stand (2026-11-27)
- Live at https://mirrorlightstudio.github.io (GitHub Pages serves the repo root; `npm run build` in web/ writes it). Pages are prerendered plain HTML, no JS.
- **Home page:** Lumen Vault (live on Google Play + App Store), a "Coming soon" section with cards for Knuckle Highway and Doodle Disguise, the privacy policy (#privacy) and contact.
- **Game pages (Nov 27):** /knuckle-highway/ and /doodle-disguise/, one page each. All their text, features and images are in `upcoming` in web/src/ComingSoon.jsx; prerender.js writes one folder per entry and sets its title, description and og tags. Add a new upcoming game = add an entry there.
  - Knuckle Highway: image + icon from the bike-combat repo's store/ folder (web/public/img/knuckle-*). Status line "In testing on Android · iPhone next".
  - Doodle Disguise: no game art yet, so the page uses a drawn SVG (DoodleArt in ComingSoon.jsx: festival stage, doodles, one disguised as a speaker). Swap in real screenshots when they exist. No repo yet; bundle ID com.mirrorlightstudio.doodledisguise.
- **Privacy policy:** sections for Lumen Vault and Knuckle Highway + "All games". Doodle Disguise needs its own section before its first test build (online play, ads, analytics).
- `app-ads.txt` stays at the repo root (AdMob checks it).

## Next / open
- On a game's release: replace its "Coming soon" badge and email button with Google Play / App Store buttons, and move it into the main Games section.
- Lumen Vault's Android link uses the old published ID com.ronitgupta.lumenvault (can't change); never copy it for new games.

## Gotchas
- Links in the nav/footer are `/#games`, `/#privacy`, `/#contact` so they work from the game pages too.
- Commit author: Mirrorlight Studio <mirrorlightstudio@gmail.com>.
