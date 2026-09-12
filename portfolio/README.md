# Hamza El Bahi — Portfolio

Responsive cinematic portfolio, built with React and Next.js, exported as a static site for Vercel.

## Run

`npm install`, then `npm run dev`. Production: `npm run build`.

The production build creates `out/index.html` and the required assets. It does not need a Node.js or Cloudflare runtime.

## Vercel

Import the repository with Root Directory left at the repository root. The root `vercel.json` installs and builds this `portfolio` directory and serves `portfolio/out`. If Root Directory is already `portfolio`, its own `vercel.json` provides the equivalent configuration. Keep the framework preset as Other; the checked-in configuration sets the exact commands and output directory.

The `portfolio` folder must be regular tracked files, not a Git submodule/gitlink. The previous nested Git history is backed up locally under `.local-backups/portfolio.git` and is excluded from uploads.

The light/dark switch remembers the selection in local storage. Contact remains a local brief download until actual contact details are supplied.

## Content

- Edit `app/content.ts` for projects, certificates, observatory studies, contact links and equipment.
- The six supplied originals are preserved in `public/images`. The portrait is also served as an optimized WebP.
- All four projects use Hamza's original work from the supplied archive and preserve its project/sub-series classification. Project dates remain unspecified.
- Real contact and social information is empty. Only supplied links render. Without an email, the form downloads a text brief locally and does not transmit personal data. With an email, it opens a prefilled email draft; automatic delivery requires a backend/provider configuration.
- The equipment section stays hidden until `profile.toolkit` contains real entries.
- Biographical copy is in `app/portfolio.tsx`. Do not introduce unconfirmed location, experience, clients or equipment.
- Certificate dates and descriptions were transcribed from the supplied originals. OISA attendance and organizing certificates are separate records.

## Accessibility

Semantic sections, keyboard-accessible filters, Base UI modal focus management, form labels, visible focus, reduced-motion support, and mobile navigation.
