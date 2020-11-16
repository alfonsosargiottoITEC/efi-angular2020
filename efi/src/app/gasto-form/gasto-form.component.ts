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
   let balanceFinal2 = [];

   if(newType.value === 'Gasto'){

   };

  //  if(newType.value === 'Gasto'){
  //    balanceFinal.forEach(balance=>{
  //    if (newDate.value == balance.mes){
  //     balance.gasto += Number (newPrice.value);  
  //     balance.total -= Number (newPrice.value);
      

  //     }else{
  //       if (newDate.value == balance.mes){
  //       balance.ingreso += Number (newPrice.value);  
  //       balance.total = Number (newPrice.value);          
  //       };
  //    };
  //   });
  //  };
   
   
  
  //  VER ESTO: ARMAR UN NUEVO ARRAY Y PUSHEARLE LOS BALANCES AHÍ, DESPS RENDERIZARLOS
   localStorage.setItem('balances', JSON.stringify(balanceFinal)); 

   newName.value='',
   newPrice.value='',
   newCategory.value='',
   newDate.value=''
   newName.focus();
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
