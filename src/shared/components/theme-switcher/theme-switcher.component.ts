import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { Theme } from './theme.model';

@Component({
  selector: 'app-theme-switcher',
  template: `
    <button class="btn btn-ghost btn-circle" [ngClass]="[this.themeService.getTheme() === 'light' ? 'text-amber-600' : 'text-blue-300']" (click)="toggleTheme()">
      <ng-icon size="1rem" [name]="this.themeService.getTheme() === 'light' ? 'featherSun' : 'featherMoon'"></ng-icon>
    </button>
  `
})
export class ThemeSwitcherComponent {
  constructor(public themeService: ThemeService) { }

  toggleTheme(): void {
    if (this.themeService.getTheme() === Theme.Light) {
      this.themeService.setTheme(Theme.Dark);
    }
    else {
      this.themeService.setTheme(Theme.Light);
    }
  }
}
