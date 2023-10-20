import { EventEmitter, Injectable, InjectionToken, Output } from '@angular/core';
import { Subject } from 'rxjs';
export const TIMER_SERVICE = new InjectionToken<TimerService>('timer-service')

@Injectable()
export class TimerService {

  @Output() openTimerEvent: EventEmitter<number | string> = new EventEmitter<number | string>;
  @Output() registerEvent: EventEmitter<string | number> = new EventEmitter<string | number>;
  
  private timerSubject = new Subject<void>();
  

  constructor() { }

  startTimer(){
    this.timerSubject.next();
  }
  getTimerObservable() {
    return this.timerSubject.asObservable();
  }
  openTimer(id: number | string){
    this.openTimerEvent.emit(id);
  }
  registerTime(id: string | number){
    console.log('eita', id)
    this.registerEvent.emit(id);
  }
}
