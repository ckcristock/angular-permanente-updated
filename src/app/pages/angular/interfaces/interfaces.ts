import { Component } from '@angular/core';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-interfaces',
  imports: [MatTabGroup, MatTabsModule],
  templateUrl: './interfaces.html',
  styleUrl: './interfaces.scss',
})
export class Interfaces {}
