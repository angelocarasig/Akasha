import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../shared/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Eden';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    const theme = this.themeService.getTheme() || this.themeService.getDefaultTheme();
    this.themeService.setTheme(theme);
  }
}
