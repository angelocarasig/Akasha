import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { AuthModule } from '../auth/auth.module';
import { LibraryComponent } from './components/library/library.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NgIcon } from '@ng-icons/core';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LibraryComponent,
    ToolbarComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,

    SharedModule,
    AuthModule,
    NgIcon,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
