import { RouterModule, Routes } from '@angular/router';
import { Observables } from './observables/observables';
import { Sweetalert } from './sweetalert/sweetalert';

export const routes: Routes = [
  { path: 'observables', component: Observables },
  { path: 'sweet-alert', component: Sweetalert },
  { path: '', redirectTo: 'observables', pathMatch: 'full' },
];
