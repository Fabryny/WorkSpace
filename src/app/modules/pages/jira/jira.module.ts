import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JiraComponent } from './jira.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FbzFormItensModule } from 'src/app/shared/lib/components/fbz-form-itens/fbz-form-itens.module';
import { FbzTimerModule } from 'src/app/shared/lib/components/fbz-timer/fbz-timer.module';
import { FbzTabelaModule } from 'src/app/shared/lib/components/fbz-tabela/fbz-tabela.module';



@NgModule({
  declarations: [
    JiraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FbzFormItensModule,
    FbzTabelaModule,

    FbzTimerModule
  ]
})
export class JiraModule { }
