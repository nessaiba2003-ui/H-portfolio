# Hamza El Bahi — Portfolio

Responsive cinematic portfolio built with React and Next.js. Its visual identity remains independent while its portfolio content is shared with ALBATROS.

## Run

`npm install`, then `npm run dev`. Production: `npm run build`.

Create `.env.local` from `.env.example` and set the ALBATROS backend URL:

```env
ALBATROS_API_BASE_URL=https://your-albatros-backend-url.com/api
```

This is a server-side variable. Do not rename it with a `NEXT_PUBLIC_` prefix.

## Shared ALBATROS content

H-portfolio reads `GET /api/public/portfolio`, the public read-only endpoint backed by the same PostgreSQL portfolio tables used by the ALBATROS admin dashboard. Projects, categories, cover images, ordered photos/videos, dates, locations, and featured status therefore have one source of truth.

The H-portfolio code never calls `/api/admin/*`, sends an authorization header, or stores an admin credential. Content creation, editing, deletion, media upload, and publishing remain in the ALBATROS admin dashboard.

If the public endpoint is unavailable or misconfigured, H-portfolio shows the curated local projects from `app/content.ts` and a discreet status message. An available empty API response stays empty and does not trigger sample content.

Relative media URLs returned by ALBATROS are resolved against the backend origin. Admin-uploaded `/uploads/*` files and absolute HTTPS media URLs are supported.

## Vercel

Import the repository with Root Directory left at the repository root. The root `vercel.json` installs and builds the Next.js application in `portfolio`. If Root Directory is already `portfolio`, its own `vercel.json` provides the equivalent configuration. Set `ALBATROS_API_BASE_URL` for Production, Preview, and Development as needed.

The `portfolio` folder must be regular tracked files, not a Git submodule/gitlink. The previous nested Git history is backed up locally under `.local-backups/portfolio.git` and is excluded from uploads.

The light/dark switch remembers the selection in local storage. Contact remains a local brief download until actual contact details are supplied.

## Content

- `app/content.ts` contains the local portfolio fallback, certificates, observatory studies, contact links, and equipment.
- The six supplied originals are preserved in `public/images`. The portrait is also served as an optimized WebP.
- The four local fallback projects use Hamza's original work from the supplied archive. Live projects and media come from ALBATROS whenever its public API is available.
- Real contact and social information is empty. Only supplied links render. Without an email, the form downloads a text brief locally and does not transmit personal data. With an email, it opens a prefilled email draft; automatic delivery requires a backend/provider configuration.
- The equipment section stays hidden until `profile.toolkit` contains real entries.
- Biographical copy is in `app/portfolio.tsx`. Do not introduce unconfirmed location, experience, clients or equipment.
- Certificate dates and descriptions were transcribed from the supplied originals. OISA attendance and organizing certificates are separate records.

## Accessibility

Semantic sections, keyboard-accessible filters, Base UI modal focus management, form labels, visible focus, reduced-motion support, and mobile navigation.
