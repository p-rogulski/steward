import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SessionRoutingModule } from './session-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PluginComponent } from './pages/dashboard/plugin/plugin.component';

@NgModule({
  declarations: [PluginComponent, DashboardComponent],
  imports: [
    CommonModule,
    SessionRoutingModule,
    FontAwesomeModule
  ]
})
export class SessionModule { }
