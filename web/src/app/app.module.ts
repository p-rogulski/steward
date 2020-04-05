import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { SessionLayoutComponent } from './layout/session-layout/session-layout.component';
import { NavItemComponent } from './layout/nav/nav-item/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeLayoutComponent,
    NavComponent,
    AuthLayoutComponent,
    SessionLayoutComponent,
    NavItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
