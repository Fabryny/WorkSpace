import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbzFormItensComponent } from './fbz-form-itens.component';
import { FbzTabelaModule } from '../fbz-tabela/fbz-tabela.module';



@NgModule({
  declarations: [FbzFormItensComponent],
  imports: [
    CommonModule,
    FbzTabelaModule,
  ],
  exports: [FbzFormItensComponent],
})
export class FbzFormItensModule { }
