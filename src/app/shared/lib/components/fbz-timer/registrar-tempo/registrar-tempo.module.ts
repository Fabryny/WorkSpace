import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarTempoComponent } from './registrar-tempo.component';
import { FbzModalModule } from '../../fbz-modal/fbz-modal.module';



@NgModule({
  declarations: [RegistrarTempoComponent],
  imports: [
    CommonModule,
    FbzModalModule
  ],
  exports: [RegistrarTempoComponent],
})
export class RegistrarTempoModule { }
