import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    { icon: '🏠', label: 'Dashboard', route: '/dashboard', active: true },
    { icon: '👥', label: 'Usuarios', route: '/users', active: false },
    { icon: '⚡', label: 'Pokémon', route: '/pokemon', active: false },
    { icon: '📅', label: 'Citas', route: '/citas', active: false },
    { icon: '💰', label: 'Pagos', route: '/pagos', active: false },
    { icon: '📊', label: 'Reportes', route: '/reportes', active: false },
    { icon: '🚪', label: 'Cerrar Sesion', route: '/logout', active: false }
  ];

  constructor(private router: Router) {}

  selectMenuItem(index: number) {
    this.menuItems.forEach((item, i) => {
      item.active = i === index;
    });
    
    const selectedItem = this.menuItems[index];
    if (selectedItem.route) {
      this.router.navigate([selectedItem.route]);
    }
  }
}
