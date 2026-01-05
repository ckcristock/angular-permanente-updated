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
        { label: 'Grid CSS', route: '/css/grid' },
        { label: 'Positions', route: '/css/positions' },
        { label: 'Animations', route: '/css/animations' },
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
      children: [{ label: 'Observables', route: '/angular/observables' }],
    },
  ];

  constructor() {}

  getMenu(): MenuItem[] {
    return this.menuItems;
  }
}
