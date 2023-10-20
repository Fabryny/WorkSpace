import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-fbz-timer',
  templateUrl: './fbz-timer.component.html',
  styleUrls: ['./fbz-timer.component.scss']
})
export class FbzTimerComponent {

  @Output() timerStopedEvent: EventEmitter<any> = new EventEmitter<any>;
  @Input() timerID!: number | string;

  private timer$!: Observable<number>;
  private timerSubscription!: Subscription;
  private startTimer$!: Subscription;


  public seconds: number = 0;
  public minutes: number = 0;
  public hours: number = 0;

  private isPaused: boolean = true;
  exibirDialog = false;
  constructor(private service: TimerService) {
    this.startTimer$ = this.service.getTimerObservable().subscribe(() => {
      this.startTimer()
    });
  }

  ngOnInit(): void {
    this.timer$ = interval(1000);
  }

  pauseTimer() {
    this.timerSubscription.unsubscribe();
    this.isPaused = true;
  }

  startTimer() {
    this.timerSubscription = this.timer$.subscribe(() => {
      this.seconds++;

      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;

        if (this.minutes === 60) {
          this.minutes = 0;
          this.hours++;
        }
      }
    });
  }

  stopTimer() {
    const timeSpent = {
      seconds: this.seconds,
      minutes: this.minutes,
      hours: this.hours,
    }
    this.timerStopedEvent.emit(timeSpent)
    this.abrirDialog();
    this.resetTimer();
    this.timerSubscription.unsubscribe();
    this.startTimer$.unsubscribe();
  }

  resetTimer() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }

  abrirDialog() {
    this.exibirDialog = true;
  }
  ngOnDestroy(): void {
    this.stopTimer();
  }

}
