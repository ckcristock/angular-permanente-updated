import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    // canActivate: [authGuard],
    loadComponent: () => import('./pages/layout/layout.component').then((m) => m.Layout),
    children: [
      { path: '', redirectTo: 'css', pathMatch: 'full' },
      {
        path: 'css',
        loadChildren: () => import('./pages/css-lessons/css-lessons.routing').then((m) => m.routes),
      },
      {
        path: 'js-ts',
        loadChildren: () => import('./pages/js-and-ts/jsandts.routing').then((m) => m.routes),
      },
      {
        path: 'angular',
        loadChildren: () => import('./pages/angular/angular.routing').then((m) => m.routes),
      },
    ],
  },
];
