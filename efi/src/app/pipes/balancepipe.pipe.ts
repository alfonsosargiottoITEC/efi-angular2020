import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'balancepipe'
})
export class BalancepipePipe implements PipeTransform {

  transform(total: any, arg1:any, arg2:any, arg3:any): any {
    let sum:number= total +arg1 +arg2 + arg3
    return sum;
  }

}
