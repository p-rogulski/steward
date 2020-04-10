import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { PluginManagementComponent } from './pages/plugin-management/plugin-management.component';
import { FlowManagementComponent } from './pages/flow-management/flow-management.component';
import { SourceMarketComponent } from './pages/source-market/source-market.component';
import { DevsRoomComponent } from './pages/devs-room/devs-room.component';
import { PluginDetailsComponent } from './pages/plugin-management/plugin-details/plugin-details.component';
import { from } from 'rxjs';


const routes: Routes = [{
  path: '',
  redirectTo: '/plugin',
  pathMatch: 'full'
},
{
  path: 'flow-management',
  component: FlowManagementComponent,
},
{
  path: 'plugin-management',
  component: PluginManagementComponent,
},
{
  path: 'source-market',
  component: SourceMarketComponent,
},
{
  path: 'devs-room',
  component: DevsRoomComponent,
},
{
  path: 'plugin/:id',
  component: PluginDetailsComponent
}
];

@NgModule({
  imports: [NgxEchartsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SessionRoutingModule { }
