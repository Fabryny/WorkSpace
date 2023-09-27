import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/pages/home/home.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: LoginComponent
  },
  {
    path: 'home', pathMatch: 'full', component: HomeComponent
    //CanActvated
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
