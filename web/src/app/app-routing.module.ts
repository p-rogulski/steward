import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { SessionLayoutComponent } from './layout/session-layout/session-layout.component';

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
  component: SessionLayoutComponent,
  children: [
    {
      path: 'session', // This is a temporary routing only for mock purposes
      loadChildren: () =>
        import('./modules/session/session.module').then(m => m.SessionModule)
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
