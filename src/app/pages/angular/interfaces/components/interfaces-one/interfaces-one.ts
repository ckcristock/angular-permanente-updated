import { Component } from '@angular/core';
type statusMachine = 'IDLE' | 'RUNNING' | 'PAUSED' | 'STOPPED' | 'ERROR' | 'EMERGENCY';

interface cuttingMachineStatus {
  power: boolean;
  temperature: number;
  bladeSpeed: number;
  bladePosition: number;
  status: 'start' | 'stop' | 'idle' | 'error';
}
@Component({
  selector: 'app-interfaces-one',
  imports: [],
  templateUrl: './interfaces-one.html',
  styleUrl: './interfaces-one.scss',
})
export class InterfacesOne {
  constructor() {}
}
