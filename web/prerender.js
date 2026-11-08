// Puts the rendered page into dist/index.html, drops the JS (the page needs none),
// then copies the finished site to the repo root, where GitHub Pages serves it.
import fs from 'node:fs'
import { render } from './dist-ssr/entry-server.js'

let html = fs.readFileSync('dist/index.html', 'utf8')
html = html.replace('<!--app-->', render()).replace(/<script type="module"[^>]*><\/script>\s*/g, '')
fs.writeFileSync('dist/index.html', html)
for (const f of fs.readdirSync('dist/assets')) if (f.endsWith('.js')) fs.rmSync('dist/assets/' + f)
fs.rmSync('../assets', { recursive: true, force: true })
fs.cpSync('dist', '..', { recursive: true })
console.log('Site written to repo root')
