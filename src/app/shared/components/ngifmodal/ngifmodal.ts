import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ngifmodal',
  imports: [],
  templateUrl: './ngifmodal.html',
  styleUrl: './ngifmodal.scss',
})
export class Ngifmodal {
  @Input() title!: string;
  @Input() message!: string;
  @Output() close = new EventEmitter<{ title: string }>();

  onClose() {
    this.close.emit({ title: 'hello' });
  }
}
