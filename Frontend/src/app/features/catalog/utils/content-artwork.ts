import { Content } from '../models/content';

const fallbackCovers: Record<Content['type'], string> = {
  Anime: '/images/catalog/anime-placeholder.webp',
  Movie: '/images/catalog/movie-placeholder.webp',
};

function fallbackImage(content: Content, backdrop: boolean): string {
  return backdrop && content.type === 'Movie'
    ? '/images/catalog/movie-backdrop.webp'
    : fallbackCovers[content.type];
}

export function getContentCover(content: Content): string {
  return content.coverImageUrl || fallbackImage(content, false);
}

export function getContentBackdrop(content: Content): string {
  return content.coverImageUrl || fallbackImage(content, true);
}

export function onContentImageError(event: Event, content: Content, backdrop = false): void {
  const image = event.target as HTMLImageElement;
  const fallback = fallbackImage(content, backdrop);
  if (!image.src.endsWith(fallback)) {
    image.src = fallback;
  }
}
