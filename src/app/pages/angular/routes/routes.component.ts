import { Component, OnInit } from '@angular/core';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { timeStamp } from 'console';
@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css'],
  imports: [MatTabGroup, MatTab, RouterLink],
})
export class RoutesComponent implements OnInit {
  paramMap: string = '';
  queryParamMap: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      console.log(paramMap);
      this.paramMap = paramMap.get('id') || '';
    });
  }

  navigateTo() {
    this.router.navigate(['/angular/routes/10?modelo=1']);
  }
}
