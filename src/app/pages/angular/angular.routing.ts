import { RouterModule, Routes } from '@angular/router';
import { Observables } from './observables/observables';
import { Sweetalert } from './sweetalert/sweetalert';
import { Interfaces } from './interfaces/interfaces';
import { PipesComponent } from './pipes/pipes.component';

export const routes: Routes = [
  { path: 'observables', component: Observables },
  { path: 'sweet-alert', component: Sweetalert },
  { path: 'interfaces', component: Interfaces },
  { path: 'pipes', component: PipesComponent },
  { path: '', redirectTo: 'observables', pathMatch: 'full' },
];
