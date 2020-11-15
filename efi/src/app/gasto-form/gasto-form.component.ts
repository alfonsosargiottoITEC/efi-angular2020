import { Component, OnInit, Output } from '@angular/core';
import { GastoService } from '../gasto.service';
@Component({
  selector: 'app-gasto-form',
  templateUrl: './gasto-form.component.html',
  styleUrls: ['./gasto-form.component.css']
})
export class GastoFormComponent implements OnInit {


  constructor(private gastoService : GastoService) {}



  ngOnInit(): void {
  
   }
  addGasto(newName: HTMLInputElement, newPrice: HTMLInputElement, newCategory: HTMLInputElement, newDate: HTMLInputElement){
    console.log ('aagregando: ', newName.value, newPrice.value,newCategory.value, newDate.value);
    this.gastoService.addGasto({
      tipo:true,
      name: newName.value,
      price: Number (newPrice.value),
      category: Number(newCategory.value),
      date: newDate.value,
      hide: true
    });
    
    newName.value='',
    newPrice.value='',
    newCategory.value='',
    newDate.value=''
    
    return false;
  }

}
