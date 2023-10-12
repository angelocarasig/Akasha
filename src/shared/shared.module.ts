import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  featherAnchor,
  featherBookOpen,
  featherGrid,
  featherList,
  featherMoon,
  featherPlusCircle,
  featherSearch,
  featherSettings,
  featherSun,
  featherArrowRight,
  featherArrowLeft,
  featherChevronRight,
  featherImage, featherBookmark, featherFile
} from '@ng-icons/feather-icons';
import { CardComponent } from './components/card/card.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { RouterLink } from '@angular/router';

const icons = {
  featherAnchor,
  featherBookOpen,
  featherGrid,
  featherList,
  featherMoon,
  featherPlusCircle,
  featherSearch,
  featherSettings,
  featherSun,
  featherArrowRight,
  featherArrowLeft,
  featherChevronRight,
  featherImage,
  featherBookmark,
  featherFile
};

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
    RouterLink,
  ]
})
export class SharedModule {
}
