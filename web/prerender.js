// Puts the rendered pages into dist/ (home + one folder per upcoming game), drops the JS (the pages need none),
// then copies the finished site to the repo root, where GitHub Pages serves it.
import fs from 'node:fs'
import { render, upcoming } from './dist-ssr/entry-server.js'

const shell = fs.readFileSync('dist/index.html', 'utf8').replace(/<script type="module"[^>]*><\/script>\s*/g, '')
fs.writeFileSync('dist/index.html', shell.replace('<!--app-->', render()))
const esc = t => t.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
for (const g of upcoming) {
  const title = `${g.name} · Coming soon from Mirrorlight Studio`
  const html = shell.replace('<!--app-->', render(g.slug))
    .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(name="description" content=")[^"]*/, `$1${esc(g.blurb)}`)
    .replace(/(property="og:title" content=")[^"]*/, `$1${esc(title)}`)
    .replace(/(property="og:description" content=")[^"]*/, `$1${esc(g.blurb)}`)
    .replace(/(property="og:image" content=")[^"]*/, `$1https://mirrorlightstudio.github.io${g.image?.src || '/img/icon.png'}`)
  fs.mkdirSync(`dist/${g.slug}`, { recursive: true })
  fs.writeFileSync(`dist/${g.slug}/index.html`, html)
}
for (const f of fs.readdirSync('dist/assets')) if (f.endsWith('.js')) fs.rmSync('dist/assets/' + f)
fs.rmSync('../assets', { recursive: true, force: true })
fs.cpSync('dist', '..', { recursive: true })
console.log('Site written to repo root')
