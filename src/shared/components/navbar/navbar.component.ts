import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  toggleTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
  }
}
