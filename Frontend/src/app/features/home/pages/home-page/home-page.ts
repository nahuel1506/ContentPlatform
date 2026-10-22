import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { ContentCard } from '../../../catalog/components/content-card/content-card';
import { Content } from '../../../catalog/models/content';
import { ContentService } from '../../../catalog/services/content.service';
import { getContentBackdrop, onContentImageError } from '../../../catalog/utils/content-artwork';

@Component({
  selector: 'app-home-page',
  imports: [ContentCard, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  private readonly contentService = inject(ContentService);
  private readonly destroyRef = inject(DestroyRef);

  readonly contents = signal<Content[]>([]);
  readonly featured = computed(() => this.contents()[0] ?? null);
  readonly loading = signal(true);
  readonly error = signal(false);
  readonly backdropImage = getContentBackdrop;
  readonly handleImageError = onContentImageError;

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
          this.error.set(true);
          this.loading.set(false);
        },
      });
  }
}
