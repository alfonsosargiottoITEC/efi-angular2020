import { Pipe, PipeTransform } from '@angular/core';
import { Gasto } from '../gasto';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(gastos:Array <Gasto>, filter: string){
    if(filter)
    return gastos.filter(gasto => gasto.name.startsWith(filter));      
    return gastos;
  }
}
    
    