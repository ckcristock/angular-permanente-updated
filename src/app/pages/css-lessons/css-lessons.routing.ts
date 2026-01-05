import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Flexbox } from './flexbox/flexbox';
import { GridCss } from './grid-css/grid-css';
import { Positions } from './positions/positions';
import { Animations } from './animations/animations';

export const routes: Routes = [
  { path: 'flexbox', component: Flexbox },
  { path: 'grid', component: GridCss },
  { path: 'positions', component: Positions },
  { path: 'animations', component: Animations },
  { path: '', redirectTo: 'flexbox', pathMatch: 'full' },
];
