import 'server-only';
import { projects as fallbackProjects } from './content';
import type { PortfolioProjectView, WorkMedia } from './content';

type AlbatrosMedia = {
  id?: number;
  type?: string;
  url?: string;
  altText?: string;
  sortOrder?: number;
};
type AlbatrosProject = {
  id?: number;
  title?: string;
  description?: string;
  projectDate?: string;
  location?: string;
  category?: string;
  coverImageUrl?: string;
  featured?: boolean;
  media?: AlbatrosMedia[];
};
export type PortfolioData = {
  projects: PortfolioProjectView[];
  source: 'albatros' | 'fallback';
  error?: string;
};

function cleanText(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value.trim() : fallback;
}
function mediaUrl(value: unknown, apiBase: URL): string {
  const raw = cleanText(value);
  if (!raw) return '';
  try {
    const resolved = new URL(raw, `${apiBase.origin}/`);
    return ['http:', 'https:'].includes(resolved.protocol)
      ? resolved.toString()
      : '';
  } catch {
    return '';
  }
}
function mapMedia(media: AlbatrosMedia[], apiBase: URL): WorkMedia[] {
  return [...media]
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
    .flatMap((item) => {
      const src = mediaUrl(item.url, apiBase);
      if (!src) return [];
      return [
        {
          src,
          type:
            item.type?.toUpperCase() === 'VIDEO'
              ? ('video' as const)
              : ('image' as const),
          alt: cleanText(item.altText),
        },
      ];
    });
}
function mapProject(
  project: AlbatrosProject,
  apiBase: URL,
): PortfolioProjectView | null {
  const title = cleanText(project.title);
  if (!title || project.id == null) return null;
  const category = cleanText(project.category, 'Uncategorized');
  const media = mapMedia(
    Array.isArray(project.media) ? project.media : [],
    apiBase,
  );
  const description = cleanText(
    project.description,
    'An original ALBATROS visual project.',
  );
  return {
    id: `albatros-${project.id}`,
    title,
    category,
    tags: [category],
    image:
      mediaUrl(project.coverImageUrl, apiBase) ||
      media.find((item) => item.type === 'image')?.src ||
      '',
    alt: `${title} — original work by Hamza El Bahi`,
    description,
    approach: description,
    groups: media.length ? [{ title, items: media }] : [],
    featured: Boolean(project.featured),
    year: cleanText(project.projectDate).slice(0, 4) || undefined,
    location: cleanText(project.location) || undefined,
  };
}
export async function getPortfolioData(): Promise<PortfolioData> {
  const configuredBase = process.env.ALBATROS_API_BASE_URL?.trim();
  if (!configuredBase)
    return {
      projects: fallbackProjects,
      source: 'fallback',
      error: 'The live archive is not configured yet.',
    };
  try {
    const apiBase = new URL(configuredBase);
    if (!['http:', 'https:'].includes(apiBase.protocol))
      throw new Error('Unsupported API protocol');
    const endpoint = new URL(
      `${apiBase.pathname.replace(/\/$/, '')}/public/portfolio`,
      apiBase.origin,
    );
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(7000),
    });
    if (!response.ok) throw new Error(`ALBATROS returned ${response.status}`);
    const payload: unknown = await response.json();
    if (!Array.isArray(payload))
      throw new Error('Invalid ALBATROS portfolio response');
    const projects = payload
      .map((item) => mapProject(item as AlbatrosProject, apiBase))
      .filter((item): item is PortfolioProjectView => item !== null)
      .sort(
        (a, b) =>
          Number(b.featured) - Number(a.featured) ||
          (b.year ?? '').localeCompare(a.year ?? ''),
      );
    return { projects, source: 'albatros' };
  } catch (error) {
    console.error(
      'Public ALBATROS portfolio unavailable:',
      error instanceof Error ? error.message : 'Unknown error',
    );
    return {
      projects: fallbackProjects,
      source: 'fallback',
      error: 'The live ALBATROS archive is temporarily unavailable.',
    };
  }
}
