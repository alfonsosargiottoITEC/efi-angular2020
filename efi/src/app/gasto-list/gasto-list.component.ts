import { Component, OnInit } from '@angular/core';
import { GastoService} from '../gasto.service';
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

  ngOnInit(): void {
    this.gastos = this.gastoService.getGastos();
  }

  addGasto(gasto: Gasto) {
    console.log(gasto);
    this.gastoService.addGasto(gasto);
  }

}
