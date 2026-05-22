# RZAV Portfolio

Ultra-premium Next.js portfolio website for a cinematic architectural visualization studio.

## Run

Open a terminal in this folder:

```text
C:\Users\Aleksa\Documents\Codex\2026-05-18\you-are-an-award-winning-creative\StudioRzav
```

First time only:

```bash
npm install
```

Every time you want to preview:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Replace Media

Project and atmosphere media live in `lib/content.ts`. Replace the placeholder image URLs with local files from `public/` or uploaded render URLs. Keep the `width` and `height` values close to the real image ratio so the galleries preserve composition.

Recommended local structure:

```text
public/
  projects/
    elysian-residences/
      cover.jpg
      01.jpg
      02.jpg
```

Then update image paths:

```ts
src: "/projects/elysian-residences/cover.jpg"
```

The current optimized images are in `public/rzav/`.

## Netlify

1. Upload this whole project folder to GitHub.
2. In Netlify, choose `Add new site`.
3. Choose `Import an existing project`.
4. Pick the GitHub repository for this website.
5. Netlify will read `netlify.toml`.
6. Click deploy.

Build command:

```text
npm run build
```

Publish directory:

```text
out
```

This project uses Next.js static export because the portfolio has no server-only
routes. Netlify should install dependencies with `npm install`, run the build
command above, and publish the generated `out` folder.
