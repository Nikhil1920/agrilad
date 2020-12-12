import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { TopNavBarComponent } from './Components/top-nav-bar/top-nav-bar.component'


const routes: Routes = [
  {
    path: '',
    component: TopNavBarComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }