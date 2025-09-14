import * as React from 'react'

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

type GoogleAdProps = {
  slot: string
  className?: string
  style?: React.CSSProperties
  layout?: 'in-article' | 'in-feed' | 'auto' | string
  responsive?: boolean
}

/**
 * Reusable Google AdSense ad unit.
 * Requires NEXT_PUBLIC_ADSENSE_CLIENT to be set (e.g., "ca-pub-XXXXXXXXXXX").
 */
export const GoogleAd: React.FC<GoogleAdProps> = ({
  slot,
  className,
  style,
  layout = 'auto',
  responsive = true
}) => {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT

  React.useEffect(() => {
    // Only run on client
    try {
      // Push a new ad request after mount
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      // no-op
    }
  }, [slot])

  if (!client) return null

  return (
    <ins
      className={`adsbygoogle${className ? ' ' + className : ''}`}
      style={{ display: 'block', ...(style || {}) }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={layout}
      data-full-width-responsive={responsive ? 'true' : 'false'}
    />
  )
}

export default GoogleAd
