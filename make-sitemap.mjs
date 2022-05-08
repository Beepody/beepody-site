#!/usr/bin/env node

import { writeFileSync } from 'fs'
import prettier from 'prettier'

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./prettier.config.js')

  const today = (new Date()).toISOString().substring(0, 10)

  let urlset = ''
  const urls = [
    '/',
    '/about/',
    '/beeps/',
    '/editor/',
    '/random/',
    '/constant/',
    '/beep/',
    '/coin/',
    '/power-up/',
    '/mario/',
    '/encounters/',
    '/feel-good/',
    '/death-march/',
    '/chain/'
  ]

  for (const url of urls) {
    urlset += `<url><loc>https://beepody.com${url}</loc><lastmod>${today}</lastmod></url>`
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlset}</urlset>`

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  })
  writeFileSync('dist/sitemap.xml', formatted)
}

void generate()
