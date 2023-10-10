import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgIconsModule } from '@ng-icons/core';
import { featherAnchor, featherBookOpen, featherSearch, featherSettings } from '@ng-icons/feather-icons';
import { CardComponent } from './components/card/card.component';

const icons = {
  featherAnchor,
  featherSearch,
  featherSettings,
  featherBookOpen
}

@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent
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
