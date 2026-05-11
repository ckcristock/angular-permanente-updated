import { Component, OnInit } from '@angular/core';
import { ShoutPipe } from '../../../pipes/shout.pipe';
import { MatTabGroup, MatTab } from '@angular/material/tabs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  imports: [ShoutPipe, MatTabGroup, MatTab],
})
export class PipesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
