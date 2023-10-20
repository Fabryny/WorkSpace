import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/pages/login/login.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { JiraComponent } from './modules/pages/jira/jira.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: LoginComponent
  },
  {
    path: 'home', pathMatch: 'full', component: HomeComponent
    //CanActvated
  },
  {
    path: 'jira', pathMatch: 'full', component: JiraComponent
    //CanActvated
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
