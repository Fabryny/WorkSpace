import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celula'
})
export class CelulaPipe implements PipeTransform {

  transform(dado: any, colunas: any): unknown {
    console.log(dado)
    console.log(colunas)

    // for(let col of colunas){
      if (colunas.field && dado.hasOwnProperty(colunas.field)) {
        return dado[colunas.field]; // Retornar o valor da propriedade correspondente
      }
    // }
    return null;
  }

}
