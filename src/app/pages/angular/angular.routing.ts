import { RouterModule, Routes } from '@angular/router';
import { Observables } from './observables/observables';

export const routes: Routes = [
  { path: 'observables', component: Observables },
  { path: '', redirectTo: 'observables', pathMatch: 'full' },
];
