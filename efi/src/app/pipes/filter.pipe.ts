import { Pipe, PipeTransform } from '@angular/core';
import { Gasto } from '../gasto';
import { GastoService } from '../services/gasto.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

transform(gastos:Array <Gasto>, filter: string){
  if(filter)
 return gastos.filter(gasto => gasto.category.toLowerCase().startsWith(filter.toLowerCase()));      
return gastos;
}
}
    
