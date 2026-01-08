import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Ngifmodal } from '../../../shared/components/ngifmodal/ngifmodal';
@Component({
  selector: 'app-modal',
  imports: [MatTabsModule, Ngifmodal],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  modal1Open = false;

  openModal1() {
    this.modal1Open = true;
  }

  closeModal1(event: any) {
    this.modal1Open = false;
    console.log('event from emitter', event);
  }
}
