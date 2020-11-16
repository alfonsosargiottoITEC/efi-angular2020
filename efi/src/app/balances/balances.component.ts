import { Component,Input, OnInit } from '@angular/core';
import { Balance } from '../balance';
import { BalanceService } from '../services/balance.service';

import { Gasto } from '../gasto';
import { GastoService } from '../services/gasto.service';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css']
})
export class BalancesComponent implements OnInit {


  @Input () balance:Balance;

  // @Input () gasto: Gasto;

  // gastos: Gasto[];

  // balances = BALANCES;
  balances: Balance[];
  
  types:string[]=['Gasto', 'Ingreso'];
  constructor(public balanceService : BalanceService) { }

  ngOnInit(): void {

    // this.balances = this.balanceService.getBalances();
    
  }


  // addBalance(newMes,newIngreso,newGasto,newTotal){
  //   console.log ('aagregando balance: ', newMes.value, newIngreso.value, newGasto.value, newTotal.value);
  //   this.balanceService.addBalance({
  //     mes: newMes.value, 
  //     ingreso: newIngreso.value,
  //     gasto: newGasto.value,
  //     total: newTotal.value,
  //     hide: true
  //   });
    

  //   return false;
  // }
}
