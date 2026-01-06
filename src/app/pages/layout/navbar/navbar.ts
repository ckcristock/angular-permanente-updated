import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Imports de Angular Material necesarios
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MenuItemsService, MenuItem } from '../../../core/services/menuItems.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  // Es vital agregar los módulos de Material aquí
  imports: [CommonModule, RouterModule, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  menuItems: MenuItem[];

  constructor(private menuService: MenuItemsService) {
    this.menuItems = this.menuService.getMenu();
  }
}
