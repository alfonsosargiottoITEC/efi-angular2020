import { Injectable } from '@angular/core';
import { Balance } from '../balance';
import { Gasto } from '../gasto';
import { GastoService} from './gasto.service';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  balances: Balance[];
  gastos2: Gasto [];
  // balances = BALANCES;

// addBalance (gasto) {
//     this.balances.push(gasto);
//   }

constructor(private gastoService : GastoService) { }


getBalances(){
  if(localStorage.getItem('balances') === null) {
    this.balances = [];
  } else {
    this.balances = JSON.parse(localStorage.getItem('balances'));
  }

  return this.balances;
  }

addToBalance(){
  this.gastos2 = this.gastoService.getGastos();
  let balances = [];
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

  if (localStorage.getItem('balances') === null){
    balances = [];  
    balances.push(balanceFinal);
    localStorage.setItem('balances', JSON.stringify(balanceFinal));
  };

  this.gastos2.forEach(gasto =>{
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
              
  
  
  if (localStorage.getItem('balances') === null){
    console.log ('BALANCE VACIO?',localStorage.getItem('balances') )
    balances = [];  
    balances.push(balanceFinal);
    localStorage.setItem('balances', JSON.stringify(balanceFinal));
    return false;
  }else{
    console.log ('BALANCE NO VACIO?',localStorage.getItem('balances') )
    balances = JSON.parse(localStorage.getItem('balances'));
    balances.push(balanceFinal);
    localStorage.setItem('balances', JSON.stringify(balanceFinal));
    return false;
  };
  
}



clearBalances(){
  localStorage.removeItem('balances');
}
// deleteBalance (gasto: Gasto){
//   for (let i = 0; i < this.gastos.length;i++){
//     if (gasto == this.gastos[i])
//       this.gastos.splice(i,1)
//       localStorage.setItem('gastos', JSON.stringify(this.gastos));
//   };
// }


}
