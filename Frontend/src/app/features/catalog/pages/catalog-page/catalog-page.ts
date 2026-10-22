import { Component, inject, OnInit, signal } from '@angular/core';
import { Content } from '../../models/content';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css'
})
export class CatalogPage implements OnInit {
  private readonly contentService = inject(ContentService);

  readonly contents = signal<Content[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.contentService.getAll().subscribe({
      next: contents => {
        this.contents.set(contents);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se pudo cargar el catálogo.');
        this.loading.set(false);
      }
    });
  }
}
