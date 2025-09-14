// TypeScript shim for react-notion-x's optional Mermaid third-party component
// This avoids TS module resolution errors when dynamically importing it.
declare module 'react-notion-x/build/third-party/mermaid' {
  export const Mermaid: any
}
