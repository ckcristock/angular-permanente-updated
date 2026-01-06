import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItemsService, MenuItem } from '../../../core/services/menuItems.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  menuItems: MenuItem[];

  constructor(private menuService: MenuItemsService) {
    this.menuItems = this.menuService.getMenu();
  }
}
