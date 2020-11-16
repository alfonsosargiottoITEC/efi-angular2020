import { Component, OnInit } from '@angular/core';
import { GastoService } from '../services/gasto.service';
import {Gasto} from '../gasto';
import { BalanceService } from '../services/balance.service';

@Component({
  selector: 'app-gasto-list',
  templateUrl: './gasto-list.component.html',
  styleUrls: ['./gasto-list.component.css']
})
export class GastoListComponent implements OnInit {

  
  gastos: Gasto[];
  
  constructor(
        public gastoService: GastoService, public balanceService: BalanceService
    ) { }
    
    
  filterGasto = '';

  ngOnInit(): void {
    this.gastos = this.gastoService.getGastos();
  }

  addGasto(gasto: Gasto) {
    
    this.gastoService.addGasto(gasto);
    return false;
    
  }

  limpiarGastosyBalances (){
    if (confirm('¿Estas seguro que querés borrar todos los gastos y balances registrados?')){
      this.gastoService.clearGastos()
      this.balanceService.clearBalances()

    }

  }
  

}
