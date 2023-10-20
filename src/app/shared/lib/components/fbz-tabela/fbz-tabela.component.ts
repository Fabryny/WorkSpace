import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fbz-tabela',
  templateUrl: './fbz-tabela.component.html',
  styleUrls: ['./fbz-tabela.component.scss']
})
export class FbzTabelaComponent {

  @Input() colunas: any;
  @Input() dados: any;
  @Input() acoes!: any;
  @Input() itens!: any;
  
  constructor(){}

  acaoFn(acao:any , dado: any){
    acao.action(dado);
  }
}
