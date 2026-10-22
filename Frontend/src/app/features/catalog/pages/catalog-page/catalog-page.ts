import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Content } from '../../models/content';
import { ContentService } from '../../services/content.service';
import { ContentCard } from '../../components/content-card/content-card';

@Component({
  selector: 'app-catalog-page',
  imports: [ContentCard, FormsModule],
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css',
})
export class CatalogPage implements OnInit {
  private readonly contentService = inject(ContentService);
  private readonly destroyRef = inject(DestroyRef);

  readonly contents = signal<Content[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  readonly search = signal('');
  readonly selectedType = signal<Content['type'] | ''>('');
  readonly selectedGenre = signal('');

  readonly genres = computed(() =>
    [...new Set(this.contents().flatMap((content) => content.genres))].sort((a, b) =>
      a.localeCompare(b, 'es'),
    ),
  );

  readonly filteredContents = computed(() => {
    const search = this.normalize(this.search().trim());
    return this.contents().filter(
      (content) =>
        this.normalize(content.title).includes(search) &&
        (!this.selectedType() || content.type === this.selectedType()) &&
        (!this.selectedGenre() || content.genres.includes(this.selectedGenre())),
    );
  });

  ngOnInit(): void {
    this.contentService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (contents) => {
          this.contents.set(contents);
          this.loading.set(false);
        },
        error: () => {
          this.error.set('No se pudo cargar el catálogo.');
          this.loading.set(false);
        },
      });
  }

  resetFilters(): void {
    this.search.set('');
    this.selectedType.set('');
    this.selectedGenre.set('');
  }

  private normalize(text: string): string {
    // Permite buscar sin distinguir mayúsculas ni tildes.
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}
