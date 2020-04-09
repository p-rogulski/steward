import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { PluginManagementComponent } from './pages/plugin-management/plugin-management.component';
import { FlowManagementComponent } from './pages/flow-management/flow-management.component';
import { PluginDetailsComponent } from './pages/plugin-management/plugin-details/plugin-details.component';


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
  path: 'plugin/:id',
  component: PluginDetailsComponent
}
];

@NgModule({
  imports: [NgxEchartsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SessionRoutingModule { }
