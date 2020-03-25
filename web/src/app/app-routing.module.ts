import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { MyAccountComponent } from './modules/session/my-account/my-account.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: '',
  component: HomeLayoutComponent,
  children: [
    {
      path: 'home',
      loadChildren: () =>
        import('./modules/home/home.module').then(m => m.HomeModule)
    }]
},
{
  path: 'account',
  component: MyAccountComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
