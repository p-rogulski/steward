import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SessionRoutingModule } from './session-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PluginComponent } from './pages/dashboard/plugin/plugin.component';
import { PluginDetailsComponent } from './pages/dashboard/plugin-details/plugin-details.component';

@NgModule({
  declarations: [PluginComponent,PluginDetailsComponent, DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    SessionRoutingModule,
    FontAwesomeModule
  ]
})
export class SessionModule { }
