import { Injectable } from '@angular/core';

export interface MenuItem {
  label: string;
  icon: string;
  route: string; // Añadimos ruta obligatoria al padre
  children?: { label: string; route: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class MenuItemsService {
  readonly menuItems: MenuItem[] = [
    {
      label: 'CSS Lessons',
      icon: 'style',
      route: '/css', // Ruta padre que coincide con app.routes.ts
      children: [
        { label: 'Flexbox', route: '/css/flexbox' },
        { label: 'Css', route: '/css/css' },
        { label: 'Scss', route: '/css/scss' },
        { label: 'Grid CSS', route: '/css/grid' },
        { label: 'Positions', route: '/css/positions' },
        { label: 'Animations', route: '/css/animations' },
        { label: 'Modal', route: '/css/modal' },
      ],
    },
    {
      label: 'JS & TS',
      icon: 'code',
      route: '/js-ts', // Ruta padre que coincide con app.routes.ts
      children: [
        { label: 'Strings', route: '/js-ts/strings' },
        { label: 'Arrays', route: '/js-ts/arrays' },
      ],
    },
    {
      label: 'Angular',
      icon: 'layers',
      route: '/angular', // Ruta padre que coincide con app.routes.ts
      children: [
        { label: 'Observables', route: '/angular/observables' },
        { label: 'Sweet Alert', route: '/angular/sweet-alert' },
        { label: 'Interfaces', route: '/angular/interfaces' },
        { label: 'Pipes', route: '/angular/pipes' },
      ],
    },
  ];

  constructor() {}

  getMenu(): MenuItem[] {
    return this.menuItems;
  }
}
