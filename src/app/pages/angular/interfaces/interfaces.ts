import { Component } from '@angular/core';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { InterfacesOne } from './components/interfaces-one/interfaces-one';

@Component({
  selector: 'app-interfaces',
  imports: [MatTabGroup, MatTabsModule, InterfacesOne],
  templateUrl: './interfaces.html',
  styleUrl: './interfaces.scss',
})
export class Interfaces {}
