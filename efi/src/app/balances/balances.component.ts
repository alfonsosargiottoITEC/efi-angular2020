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

  gastos: Gasto[];

  // balances = BALANCES;
  balances: Balance[];
  
  types:string[]=['Gasto', 'Ingreso'];
  constructor(public balanceService : BalanceService,
    private gastoService : GastoService) { }

  ngOnInit(): void {

    this.balances = this.balanceService.getBalances();
    this.gastos = this.gastoService.getGastos();
    
    
  }

  calcularBalance (){

  this.gastos = this.gastoService.getGastos();
  console.log ("###################################", this.gastos)

  let gastos = [];
  let ingresos = [];
  let totalGastos = [];
  let totalIngresos = [];
  let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  let balanceFinal = [{mes:'Enero',gasto:0,ingreso:0,total:0,hide:true},
  {mes:'Febrero',gasto:0,ingreso:0,total:0,hide:true},
  {mes:'Marzo',gasto:0,ingreso:0,total:0,hide:true},
  {mes:'Abril',gasto:0,ingreso:0,total:0,hide:true},
  {mes:'Mayo',gasto:0,ingreso:0,total:0,hide:true},
  {mes:'Junio',gasto:0,ingreso:0,total:0,hide:true},
  {mes:'Julio',gasto:0,ingreso:0,total:0,hide:true},
  {mes:'Agosto',gasto:0,ingreso:0,total:0,hide:true},
  {mes:'Septiembre',gasto:0,ingreso:0,total:0,hide:true},
  {mes:'Octubre',gasto:0,ingreso:0,total:0,hide:true},
  {mes:'Noviembre',gasto:0,ingreso:0,total:0,hide:true},
  {mes:'Diciembre',gasto:0,ingreso:0,total:0,hide:true},
 ];
  
  this.gastos.forEach(gasto =>{
    balanceFinal.forEach(balance=>{
        if(gasto.type==='Gasto'){
            if (gasto.date == balance.mes){   
                balance.gasto += gasto.price;  
                balance.total -= gasto.price;       
        
              };
            }else{
                if (gasto.date == balance.mes){   
                    balance.ingreso += gasto.price;
                    balance.total += gasto.price;
        
                  };
                };
              });
            
            });
              
              
  localStorage.setItem('balances', JSON.stringify(balanceFinal)); 




  };


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
