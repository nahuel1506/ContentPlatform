import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/catalog/pages/catalog-page/catalog-page')
      .then(module => module.CatalogPage)
  },
  {
    path: 'catalog/:id',
    loadComponent: () => import('./features/catalog/pages/content-detail-page/content-detail-page')
      .then(module => module.ContentDetailPage)
  }
];
