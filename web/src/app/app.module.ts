import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from './app.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { HomeLayoutComponent } from '@layout/home-layout/home-layout.component';
import { NavComponent } from '@layout/nav/nav.component';
import { AuthLayoutComponent } from '@layout/auth-layout/auth-layout.component';
import { SessionLayoutComponent } from '@layout/session-layout/session-layout.component';
import { NavItemComponent } from '@layout/nav/nav-item/nav-item.component';
import { NavGroupComponent } from './layout/nav/nav-group/nav-group.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeLayoutComponent,
    NavComponent,
    AuthLayoutComponent,
    SessionLayoutComponent,
    NavItemComponent,
    NavGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
