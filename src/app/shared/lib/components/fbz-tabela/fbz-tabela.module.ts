import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbzTabelaComponent } from './fbz-tabela.component';
import { CelulaPipe } from './celula.pipe';



@NgModule({
  declarations: [FbzTabelaComponent, CelulaPipe],
  imports: [
    CommonModule
  ],
  exports: [FbzTabelaComponent],
})
export class FbzTabelaModule { }
