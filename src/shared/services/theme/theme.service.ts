import { Injectable } from '@angular/core';
import { Theme } from '../../components/theme-switcher/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_ATTRIBUTE = 'data-theme';

  constructor() {
  }

  setTheme(theme: string): void {
    document.documentElement.setAttribute(this.THEME_ATTRIBUTE, theme);
    localStorage.setItem(this.THEME_ATTRIBUTE, theme);
  }

  getTheme(): string | null {
    return localStorage.getItem(this.THEME_ATTRIBUTE) ||
      document.documentElement.getAttribute(this.THEME_ATTRIBUTE);
  }

  getDefaultTheme(): string {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return Theme.Dark;
    }
    return Theme.Light;
  }
}
