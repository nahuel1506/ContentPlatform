import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/catalog/pages/catalog-page/catalog-page')
      .then(module => module.CatalogPage)
  }
];
