import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgIconsModule } from '@ng-icons/core';
import { featherAnchor, featherBookOpen, featherGrid, featherList, featherMoon, featherSearch, featherSettings, featherSun } from '@ng-icons/feather-icons';
import { CardComponent } from './components/card/card.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';

const icons = {
  featherAnchor,
  featherSearch,
  featherSettings,
  featherBookOpen,
  featherGrid,
  featherList,
  featherSun,
  featherMoon,
}

@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    ThemeSwitcherComponent
  ],
  exports: [
    NavbarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons(icons),
  ]
})
export class SharedModule { }
