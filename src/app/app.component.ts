import { Component } from '@angular/core';
import { TimerService } from './shared/lib/components/fbz-timer/timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'workspace';
  showTimer = false;
  timerId!: string | number;
  
  constructor(private timerService: TimerService){
    this.timerService.openTimerEvent.subscribe((value: string | number)=>{
      this.showTimer = true;
      this.timerId = value;
    })
  }
  

}
