#!/usr/bin/env node

import { writeFileSync } from 'fs'
import prettier from 'prettier'

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')

  let urlset = ''
  // const { default: getPages } = await import('../prerender-urls.js')
  // for (const page of await getPages()) {
  //   urlset += `<url>
  //   <loc>https://beepody.com${page.url}</loc>
  //   <lastmod>2022-04-20</lastmod>
  // </url>`
  // }

  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlset}</urlset>
  `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  })
  writeFileSync('public/sitemap.xml', formatted)
}

generate()
