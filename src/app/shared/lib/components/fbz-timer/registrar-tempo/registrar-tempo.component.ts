import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimerService } from '../timer.service';
import { JiraComponent } from 'src/app/modules/pages/jira/jira.component';

@Component({
  selector: 'app-registrar-tempo',
  templateUrl: './registrar-tempo.component.html',
  styleUrls: ['./registrar-tempo.component.scss'],
  providers: [
    TimerService,
    JiraComponent
  ]
})
export class RegistrarTempoComponent {

  @Output() fecharModalEvent: EventEmitter<void> = new EventEmitter<void>;
  @Input() timerID!: string | number;

  constructor(private timer: TimerService) {

  }
  fechar() {
    this.timer.registerTime(this.timerID);
    //TROCAR PELO SERVICE DO FIREBASE
    // this.jira.add({})
    this.fecharModalEvent.emit()
  }
}
