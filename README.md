# Pedro Coelho — Game Developer Portfolio

A responsive, English-language portfolio built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4.

## Local development

```sh
npm ci
npm run dev -- --port 3026
```

Open http://localhost:3026.

## Validation and production

```sh
npm run lint
npm run build
```

The build generates a static website in `out/`, including the six project detail pages. Do not run a build and the development server simultaneously: both use `.next/`. The static export is deployed by the existing GitHub Pages workflow; `next start` is not compatible with static exports.

The GitHub Pages workflow deploys every push to `main` and supplies `NEXT_PUBLIC_BASE_PATH` from the site's Pages configuration, so the custom domain uses the root path automatically. Manual production builds default to `/PHQCportfolio`; for a domain root, pass an empty `NEXT_PUBLIC_BASE_PATH` in the build environment. For a different subdirectory, set it to that subdirectory (for example, `/portfolio`). The asset helper and Next.js routes share this setting.

## Editing content

- `src/data/projects.ts`: project order, categories, cover images, descriptions, and contributions.
- `src/data/project-details.ts`: technical descriptions, screenshots, and gameplay videos.
- `src/components/home-page.tsx`: introduction, about, and expertise.
- `src/components/hero-video-background.tsx`: responsive background video and playback behavior.
- `src/lib/site.ts`: social links and asset paths.
- `src/app/globals.css`: colors, typography, layouts, interactions, and responsive breakpoints.

Images live in `public/images/<project-slug>/` and videos in `public/videos/<project-slug>/`, referenced by their real path. Add images as compressed WebP; everything in `public/` is deployed, so keep original exports out of it. Videos load only when requested.

The interface includes project filters, shareable project modals, an image gallery, native demo video controls, mobile navigation, visible keyboard focus, a skip link, and reduced-motion support.

## Home background video

The Afonse background combines three gameplay clips into a 16-second loop with dissolves. Generated assets live in `public/videos/hero/` and `public/images/hero/`: a silent 1280x720 desktop MP4 (~1.27 MB), a 480x854 portrait MP4 (~530 KB), and a WebP poster (~27 KB). Both videos use H.264 at 24 fps with fast-start metadata. The browser loads only the appropriate video and pauses playback outside the hero, in hidden tabs, and behind project modals. Reduced-motion and data-saving preferences use the poster instead of autoplay. The decorative background has no playback controls.

To regenerate the assets from the original videos, install FFmpeg and run:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/optimize-hero-videos.ps1
```
