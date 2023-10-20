import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fbz-form-itens',
  templateUrl: './fbz-form-itens.component.html',
  styleUrls: ['./fbz-form-itens.component.scss']
})
export class FbzFormItensComponent {

  @Output() dadoAdicionadoEvent: EventEmitter<any> = new EventEmitter<any>

  @Input() colunasTabela: any;
  @Input() form!: FormGroup;
  @Input() acoes!: any;
  @Input() itens: any[] = [];



  cols: any
  constructor() { }

  onAdd() {
    if(!this.form.valid){
      return
    }
    const dadosForm = this.form.getRawValue();
    // this.dadosTabela = [...this.dadosTabela, dadosForm];
    this.form.reset();
    this.dadoAdicionadoEvent.emit(dadosForm);
    console.log('emitido')
  }

}
