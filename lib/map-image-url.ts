import { type Block } from 'notion-types'
import { defaultMapImageUrl } from 'notion-utils'

import { defaultPageCover, defaultPageIcon, host } from './config'

export const mapImageUrl = (url: string | undefined, block: Block) => {
  if (!url) return absolutize(defaultPageIcon)

  // If Notion returns a custom emoji image (which can 404 during build), use default icon
  if (url.includes('custom_emoji')) {
    return absolutize(defaultPageIcon)
  }

  if (url === defaultPageCover || url === defaultPageIcon) {
    return absolutize(url)
  }

  return defaultMapImageUrl(url, block)
}

function absolutize(u?: string | null): string | undefined {
  if (!u) return undefined
  if (u.startsWith('http://') || u.startsWith('https://')) return u
  if (u.startsWith('/')) return `${host}${u}`
  return u
}