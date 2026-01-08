import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Flexbox } from './flexbox/flexbox';
import { GridCss } from './grid-css/grid-css';
import { Positions } from './positions/positions';
import { Animations } from './animations/animations';
import { Css } from './css/css';
import { ScssLessons } from './scss-lessons/scss-lessons';
import { Modal } from './modal/modal';

export const routes: Routes = [
  { path: 'flexbox', component: Flexbox },
  { path: 'css', component: Css },
  { path: 'scss', component: ScssLessons },
  { path: 'grid', component: GridCss },
  { path: 'positions', component: Positions },
  { path: 'animations', component: Animations },
  { path: 'modal', component: Modal },
  { path: '', redirectTo: 'flexbox', pathMatch: 'full' },
];
