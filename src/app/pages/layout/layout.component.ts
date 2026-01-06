import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav'; // Angular Material
import { Topbar } from '../layout/topbar/topbar';
import { Navbar } from '../layout/navbar/navbar';
import { Footer } from '../layout/footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, MatSidenavModule, Topbar, Navbar, Footer],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class Layout {}
