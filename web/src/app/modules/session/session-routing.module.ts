import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FlowComponent } from './pages/flow/flow.component';
import { PluginDetailsComponent } from './pages/dashboard/plugin-details/plugin-details.component';


const routes: Routes = [{
  path: '',
  redirectTo: '/plugin',
  pathMatch: 'full'
},
{
  path: 'flow',
  component: FlowComponent,
},
{
  path: 'dashboard',
  component: DashboardComponent,
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
