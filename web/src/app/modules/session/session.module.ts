import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '@shared/shared.module';
import { SessionRoutingModule } from './session-routing.module';
import { DashboardState } from './state/dashboard.state';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PluginComponent } from './pages/dashboard/plugin/plugin.component';
import { PluginDetailsComponent } from './pages/dashboard/plugin-details/plugin-details.component';
import { ChartComponent } from './pages/dashboard/plugin-details/chart/chart.component';
import { TopHolderComponent } from './pages/dashboard/top-holder/top-holder.component';
import { FlowComponent } from './pages/flow/flow.component';

@NgModule({
  declarations: [
    PluginComponent,
    PluginDetailsComponent,
    DashboardComponent,
    ChartComponent,
    TopHolderComponent,
    FlowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxsModule.forRoot([DashboardState]),
    NgxEchartsModule,
    SharedModule,
    SessionRoutingModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ]
})
export class SessionModule { }
