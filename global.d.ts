declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

// Some icon packages ship without types for per-file imports; provide a minimal fallback.
declare module '@react-icons/all-files/*' {
  import type { ComponentType, SVGProps } from 'react'
  const Icon: ComponentType<SVGProps<SVGSVGElement>>
  export { Icon as default }
}
