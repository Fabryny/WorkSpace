import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { JiraModule } from './jira/jira.module';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    HomeModule,
    LoginModule,
    JiraModule
  ]
})
export class PagesModule { }
