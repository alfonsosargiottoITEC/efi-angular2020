import { Component, OnInit } from '@angular/core';
import { GastoService } from '../services/gasto.service';
import {Gasto} from '../gasto';

@Component({
  selector: 'app-gasto-list',
  templateUrl: './gasto-list.component.html',
  styleUrls: ['./gasto-list.component.css']
})
export class GastoListComponent implements OnInit {

  
  gastos: Gasto[];
  
  constructor(
        public gastoService: GastoService
    ) { }
    
    
  filterGasto = '';

  ngOnInit(): void {
    this.gastos = this.gastoService.getGastos();
  }

  addGasto(gasto: Gasto) {
    
    this.gastoService.addGasto(gasto);
  }

}
