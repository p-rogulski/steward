import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

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
  path: '',
  component: AuthLayoutComponent,
  children: [
    {
      path: 'auth',
      loadChildren: () =>
        import('./modules/auth/auth.module').then(m => m.AuthModule)
    }]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
