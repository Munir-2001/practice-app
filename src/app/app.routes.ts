import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'loaderpage',
    pathMatch: 'full',
  },
  // {
  //   path: 'folder/:id',
  //   loadComponent: () =>
  //     import('./pages/loaderpage/loaderpage.page').then((m) => m.LoaderpagePage),
  // },
  {
    path: 'loaderpage',
    loadComponent: () => import('./pages/loaderpage/loaderpage.page').then( m => m.LoaderpagePage)
  },
];
