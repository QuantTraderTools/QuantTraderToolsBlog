Place your Mokoto font files here as `Mokoto.woff2` (preferred) and optionally `Mokoto.woff`.

Notes
- Ensure you have the legal right/license to embed and distribute the Mokoto font with your website/app.
- After adding the files, the `@font-face` in `styles/global.css` will load them automatically:
  - /fonts/mokoto/Mokoto.woff2
  - /fonts/mokoto/Mokoto.woff
- Then redeploy to Vercel to see the font applied to:
  - Landing page title
  - Header breadcrumb title

Troubleshooting
- If the font doesn’t render, open DevTools → Network → filter by “Mokoto” and check the font files return 200.
- Clear browser cache or hard refresh.
- Keep the filenames exactly as above or update the CSS src paths accordingly.
