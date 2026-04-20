import type { Plugin } from 'vite'

const PLACEHOLDER_SVG = `data:image/svg+xml;base64,${Buffer.from(
  `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" rx="100" fill="#e8eaf6"/>
    <circle cx="100" cy="80" r="30" fill="#c5cae9"/>
    <ellipse cx="100" cy="150" rx="50" ry="30" fill="#c5cae9"/>
  </svg>`
).toString('base64')}`

export default function figmaAssetPlugin(): Plugin {
  return {
    name: 'vite-plugin-figma-asset',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        return `\0figma-asset:${id}`
      }
    },
    load(id) {
      if (id.startsWith('\0figma-asset:')) {
        return `export default "${PLACEHOLDER_SVG}";`
      }
    },
  }
}
