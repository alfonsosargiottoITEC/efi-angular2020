import { Component, OnInit, Output } from '@angular/core';
import { GastoService } from '../services/gasto.service';
import { Category } from '../category';
import { CategoryService } from '../services/categoria.service';


@Component({
  selector: 'app-gasto-form',
  templateUrl: './gasto-form.component.html',
  styleUrls: ['./gasto-form.component.css'],
  providers: [CategoryService]
})
export class GastoFormComponent implements OnInit {



  constructor(private gastoService : GastoService, private categoryService: CategoryService) {}

  types:string[]=['Gasto', 'Ingreso'];
  dates:string[]=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  // categorias: string [] = ['pan','carne',"luz"];
  categorias : Category [];
  filterGasto = '';
  
  
  ngOnInit(): void {
    
    this.categorias = this.categoryService.getCategorias();
    
  }
  addGasto(newType:HTMLInputElement, newName: HTMLInputElement, newPrice: HTMLInputElement, newCategory: HTMLInputElement, newDate: HTMLInputElement){
    console.log ('aagregando: ',newType.value, newName.value, newPrice.value,newCategory.value, newDate.value);
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
    newCategory.value='',
    newDate.value=''
    
    newName.focus();
    return false;
  }
  

}
