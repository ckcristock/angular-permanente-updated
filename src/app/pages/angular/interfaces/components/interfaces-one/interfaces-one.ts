import { Component } from '@angular/core';

@Component({
  selector: 'app-interfaces-one',
  imports: [],
  templateUrl: './interfaces-one.html',
  styleUrl: './interfaces-one.scss',
})

type statusMachine = 'IDLE' | 'RUNNING' | 'PAUSED' | 'STOPPED' | 'ERROR' | 'EMERGENCY';

interface cuttingMachineStatus {
  power: boolean;
  temperature: number;
  bladeSpeed: number;
  bladePosition: number;
  status: 'start' | 'stop' | 'idle' | 'error';
}

export class InterfacesOne {
  
  constructor() {}
}
