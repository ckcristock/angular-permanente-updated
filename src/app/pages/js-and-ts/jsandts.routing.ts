import { RouterModule, Routes } from '@angular/router';
import { Strings } from './strings/strings';
import { Arrays } from './arrays/arrays';

export const routes: Routes = [
  { path: 'strings', component: Strings },
  { path: 'arrays', component: Arrays },
  { path: '', redirectTo: 'strings', pathMatch: 'full' },
];
