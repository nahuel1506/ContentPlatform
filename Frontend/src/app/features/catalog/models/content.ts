export interface Content {
  id: string;
  type: 'Anime' | 'Movie';
  title: string;
  description: string;
  coverImageUrl: string | null;
  genres: string[];
}
