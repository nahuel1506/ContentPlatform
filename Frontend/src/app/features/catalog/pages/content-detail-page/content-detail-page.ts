import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, of, switchMap } from 'rxjs';
import { Content } from '../../models/content';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-content-detail-page',
  imports: [RouterLink],
  templateUrl: './content-detail-page.html',
  styleUrl: './content-detail-page.css'
})
export class ContentDetailPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly contentService = inject(ContentService);
  private readonly destroyRef = inject(DestroyRef);

  readonly content = signal<Content | null>(null);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.loading.set(true);
        this.error.set(null);
        this.content.set(null);

        return this.contentService.getById(params.get('id')!).pipe(
          catchError((response: HttpErrorResponse) => {
            this.error.set(response.status === 404
              ? 'El contenido no existe.'
              : 'No se pudo cargar el contenido.');
            return of(null);
          })
        );
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(content => {
      this.content.set(content);
      this.loading.set(false);
    });
  }
}
