import { Injectable } from '@angular/core';
import { Balance } from '../balance';
import { Gasto } from '../gasto';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  balances: Balance[];
  // balances = BALANCES;

// addBalance (gasto) {
//     this.balances.push(gasto);
//   }

constructor() { }


getBalances(){
  if(localStorage.getItem('balances') === null) {
    this.balances = [];
  } else {
    this.balances = JSON.parse(localStorage.getItem('balances'));
  }

  return this.balances;
  }

addBalance(balance: Balance){
  this.balances.push(balance);
  let balances = [];
  if (localStorage.getItem('balances') === null){
    balances = [];  
    balances.push(balance);
    localStorage.setItem('balances', JSON.stringify(balances));
  }else{
    balances = JSON.parse(localStorage.getItem('balances'));
    balances.push(balance);
    localStorage.setItem('balances', JSON.stringify(balances));
  }
  
}

// deleteBalance (gasto: Gasto){
//   for (let i = 0; i < this.gastos.length;i++){
//     if (gasto == this.gastos[i])
//       this.gastos.splice(i,1)
//       localStorage.setItem('gastos', JSON.stringify(this.gastos));
//   };
// }


}
