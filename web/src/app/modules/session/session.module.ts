import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '@shared/shared.module';
import { SessionRoutingModule } from './session-routing.module';
import { PluginState } from './state/plugin.state';
import { PluginManagementComponent } from './pages/plugin-management/plugin-management.component';
import { PluginComponent } from './pages/plugin-management/plugin/plugin.component';
import { PluginDetailsComponent } from './pages/plugin-management/plugin-details/plugin-details.component';
import { ChartComponent } from './pages/plugin-management/plugin-details/chart/chart.component';
import { PluginsHolderComponent} from './pages/plugin-management/top-holder/plugins-holder.component';
import { FlowHolderComponent  } from './pages/flow-management/top-holder/flow-holder.component';
import { FlowManagementComponent } from './pages/flow-management/flow-management.component';

@NgModule({
  declarations: [
    PluginComponent,
    PluginDetailsComponent,
    PluginManagementComponent,
    ChartComponent,
    PluginsHolderComponent,
    FlowHolderComponent,
    FlowManagementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxsModule.forRoot([PluginState]),
    NgxEchartsModule,
    SharedModule,
    SessionRoutingModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ]
})
export class SessionModule { }
