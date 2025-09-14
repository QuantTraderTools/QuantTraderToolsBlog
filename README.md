# Next.js Notion Starter Kit (Customized)

This project is a customized version of the Next.js Notion Starter Kit. It uses Notion as a CMS and adds Google Analytics (GA4) and Google AdSense integration, plus Mermaid for diagrams.

## Features

- Next.js + TypeScript
- Notion-powered pages via `react-notion-x`
- Google Analytics 4 (GA4) via Next.js `Script`
- Google AdSense with a reusable ad component
- Syntax highlighting (Prism)
- Mermaid diagram support

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Configure environment variables:

Copy `.env.local.example` to `.env.local` and fill in your values.

```bash
cp .env.local.example .env.local
```

Required variables:

- `NEXT_PUBLIC_ADSENSE_CLIENT` — Your AdSense Publisher ID (e.g., `ca-pub-XXXXXXXXXXXXXXX`).
- `NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE` — AdSense slot ID for in-article ad placement (e.g., `1234567890`).
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 Measurement ID (e.g., `G-XXXXXXXXXX`).

3. Development server:

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

4. Production build and start:

```bash
pnpm build
pnpm start
```

## AdSense Integration

- Global loader is added in `pages/_document.tsx` and only loads when `NEXT_PUBLIC_ADSENSE_CLIENT` is provided.
- Reusable component: `components/GoogleAd.tsx`.
- Blog post placement: In-article ad renders in `components/NotionPage.tsx` when `NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE` is set.

Example usage:

```tsx
<GoogleAd slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE!} />
```

## Google Analytics (GA4)

GA is loaded and initialized in `pages/_app.tsx` using Next.js `Script`. Page views are tracked on client-side route changes.

## Scripts

- `pnpm dev` — Start next dev server
- `pnpm build` — Production build
- `pnpm start` — Start production server

## Notes

- Ensure your Notion integration and site config are set appropriately in `lib/config.ts` and `site.config.ts`.
- For Mermaids diagrams, code blocks with Mermaid syntax are auto-detected and rendered.

## License

MIT
