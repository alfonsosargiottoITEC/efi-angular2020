import { Component, OnInit, Output } from '@angular/core';
import { GastoService } from '../services/gasto.service';
import { Category } from '../category';
import { CategoryService } from '../services/categoria.service';
import { Gasto } from '../gasto';
import { Balance } from '../balance';
import { BalanceService } from '../services/balance.service';


@Component({
  selector: 'app-gasto-form',
  templateUrl: './gasto-form.component.html',
  styleUrls: ['./gasto-form.component.css'],
  providers: [CategoryService]
})
export class GastoFormComponent implements OnInit {



  constructor(private gastoService : GastoService, private categoryService: CategoryService, private balanceService: BalanceService) {}

  types:string[]=['Gasto', 'Ingreso'];
  dates:string[]=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  categorias : Category [];
  filterGasto = '';
  date = '';
  type = '';
  category = '';

  gastos2: Gasto[];
  balances: Balance[];
  
  
  ngOnInit(): void {
    
    this.categorias = this.categoryService.getCategorias();
    this.balances = this.balanceService.getBalances();

    
  }
  addGasto(newType:HTMLInputElement, newName: HTMLInputElement, newPrice: HTMLInputElement, newCategory: HTMLInputElement, newDate: HTMLInputElement){
    this.gastoService.addGasto({
      type: newType.value,
      name: newName.value,
      price: Number (newPrice.value),
      category: newCategory.value,
      date: newDate.value,
      hide: true
    });
    newName.value='',
    newPrice.value='',
    
    newName.focus();
  
  //  VER ESTO: ARMAR UN NUEVO ARRAY Y PUSHEARLE LOS BALANCES AHÍ, DESPS RENDERIZARLOS
  // localStorage.setItem('balances', JSON.stringify(balanceFinal)); 
  
  
  return false;
  
  this.gastos2 = this.gastoService.getGastos();
  
  // this.gastos2.forEach(gasto =>{
  //   balanceFinal.forEach(balance=>{
  //     if(gasto.type==='Gasto'){
  //       if (gasto.date == balance.mes){   
  //         balance.gasto += gasto.price;  
  //         balance.total -= gasto.price;       
          
  //       };
  //     }else{
  //       if (gasto.date == balance.mes){   
  //         balance.ingreso += gasto.price;
  //         balance.total += gasto.price;
          
  //       };
  //     };
  //   });
    
  // });
  
  
  }

}
