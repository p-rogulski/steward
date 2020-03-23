import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '../app/core/core.module';
import { AppComponent } from './app.component';
import { TopNavigation } from './layout/top-navigation/top-navigation.component';
import { FooterComponent } from './layout/footer/footer.component';
import { InputComponent } from './shared/input/input.component';
import { AvatarComponent } from './shared/avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigation,
    FooterComponent,
    InputComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
