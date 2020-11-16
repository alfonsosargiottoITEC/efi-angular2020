import { Component, Input, OnInit } from '@angular/core';
import { Gasto } from '../gasto';
import { GastoService } from '../services/gasto.service';
import { Balance } from '../balance';
import { BalanceService } from '../services/balance.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  
  @Input () gasto: Gasto;

  gastos: Gasto[];
  
  

  
  
  constructor(
    public gastoService : GastoService,
    public balanceService : BalanceService
    ) {}

  filterGasto = '';

  // ngOnInit(): void {
  //   this.getGastos();
  // }

  ngOnInit(): void {
  
   }
   deleteGasto(gasto: Gasto){
     if (confirm('¿Estas seguro que querés eliminar este registro?')){

       this.gastoService.deleteGasto(gasto);
     }
   }
  
  }


  // getGastos(): void{
  //   this.gastoService.getGastos()
  //   .subscribe(gastos => this.gastos = gastos);
  // }
  

