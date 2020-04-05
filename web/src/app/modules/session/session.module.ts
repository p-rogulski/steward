import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardState } from './state/dashboard.state';
import { SessionRoutingModule } from './session-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PluginComponent } from './pages/dashboard/plugin/plugin.component';
import { PluginDetailsComponent } from './pages/dashboard/plugin-details/plugin-details.component';
import { ChartComponent } from './pages/dashboard/plugin-details/chart/chart.component';

@NgModule({
  declarations: [PluginComponent, PluginDetailsComponent, DashboardComponent, ChartComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxEchartsModule,
    SessionRoutingModule,
    FontAwesomeModule,
    NgxsModule.forRoot([DashboardState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ]
})
export class SessionModule { }
