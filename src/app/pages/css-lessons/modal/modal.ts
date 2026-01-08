import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-modal',
  imports: [MatTabsModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {}
