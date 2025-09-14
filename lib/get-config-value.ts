import rawSiteConfig from '../site.config'
import { type SiteConfig } from './site-config'

if (!rawSiteConfig) {
  throw new Error(`Config error: invalid site.config.ts`)
}

// allow environment variables to override site.config.ts
let siteConfigOverrides: SiteConfig | undefined

try {
  const raw = process.env.NEXT_PUBLIC_SITE_CONFIG
  if (typeof raw === 'string' && raw.trim().length > 0) {
    siteConfigOverrides = JSON.parse(raw) as SiteConfig
  }
} catch (err) {
  console.warn(
    'Warning: ignoring invalid NEXT_PUBLIC_SITE_CONFIG; failed to parse JSON.'
  )
  // Intentionally ignore invalid overrides in dev/prod instead of crashing
}

const siteConfig: SiteConfig = {
  ...rawSiteConfig,
  ...siteConfigOverrides
}

export function getSiteConfig<T, TDefault>(
  key: string,
  defaultValue?: TDefault
): TDefault extends undefined ? T | undefined : T {
  const value = siteConfig[key as keyof SiteConfig]

  if (value !== undefined) {
    return value as T
  }

  return defaultValue as TDefault extends undefined ? T | undefined : T
}

export function getRequiredSiteConfig<T>(key: string): T {
  const value = siteConfig[key as keyof SiteConfig]

  if (value !== undefined) {
    return value as T
  }

  throw new Error(`Config error: missing required site config value "${key}"`)
}

export const isServer = typeof window === 'undefined'

export function getEnv<T>(
  key: string,
  defaultValue?: string | T,
  env = process.env
): string | T {
  const value = env[key]

  if (value !== undefined) {
    return value as string
  }

  if (defaultValue !== undefined) {
    return defaultValue
  }

  if (isServer) {
    throw new Error(`Config error: missing required env variable "${key}"`)
  }

  return null as unknown as T
}