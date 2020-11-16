import { Component, OnInit } from '@angular/core';
import { Balance } from '../balance';
import { BalanceService } from '../services/balance.service';
import { Gasto } from '../gasto';
import { GastoService } from '../services/gasto.service';
import { BALANCES } from '../mock-balances';


@Component({
  selector: 'app-balance-list',
  templateUrl: './balance-list.component.html',
  styleUrls: ['./balance-list.component.css']

})
export class BalanceListComponent implements OnInit {
  
  balances = BALANCES;
  types:string[]=['Gasto', 'Ingreso'];

  
  gastos : Gasto [];

  constructor(public balanceService: BalanceService,
    public gastoService: GastoService) 
    { }

  ngOnInit(): void {

    this.balances = this.balanceService.getBalances();
    this.gastos = this.gastoService.getGastos();
    
  }

  addBalance(balance: Balance){
    this.balanceService.addBalance(balance);
  }

}
