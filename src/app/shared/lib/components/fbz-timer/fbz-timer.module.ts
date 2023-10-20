import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbzTimerComponent } from './fbz-timer.component';
import { TimerService } from './timer.service';
import { RegistrarTempoModule } from 'src/app/shared/lib/components/fbz-timer/registrar-tempo/registrar-tempo.module';



@NgModule({
  declarations: [
    FbzTimerComponent,
  ],
  imports: [
    CommonModule,
    RegistrarTempoModule,

  ],
  exports: [
    FbzTimerComponent
  ],
  providers:[
    TimerService
  ]
})
export class FbzTimerModule { }
