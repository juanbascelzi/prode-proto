import type { Plugin } from 'vite'

// Paletas con el look & feel de los memojis (igual que la imagen de referencia del ranking)
const BG_PALETTE = [
  'b6e3f4', 'c0aede', 'd1d4f9', 'ffd5dc', 'ffdfbf',
  'bde0fe', 'a2d2ff', 'ffc8dd', 'cdb4db', 'e0bbE4',
  'c1e1c1', 'f4c2c2', 'ffb5a7', 'b5ead7', 'c7ceea',
]

// Hash determinístico a partir del id del asset (para que cada asset
// siempre genere el mismo avatar).
function hash(str: string): number {
  let h = 5381
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h) + str.charCodeAt(i)
    h |= 0
  }
  return Math.abs(h)
}

function avatarUrlFor(id: string): string {
  const seed = id.replace(/^figma:asset\//, '')
  const bg = BG_PALETTE[hash(seed) % BG_PALETTE.length]
  // DiceBear "avataaars" = estilo memoji/cartoon como el de la referencia.
  // Usamos la URL pública que devuelve un SVG directo.
  const params = new URLSearchParams({
    seed,
    backgroundColor: bg,
    radius: '50',
  })
  return `https://api.dicebear.com/7.x/avataaars/svg?${params.toString()}`
}

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
        const originalId = id.slice('\0figma-asset:'.length)
        const url = avatarUrlFor(originalId)
        return `export default ${JSON.stringify(url)};`
      }
    },
  }
}
