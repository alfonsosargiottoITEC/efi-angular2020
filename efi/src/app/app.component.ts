import { Component } from '@angular/core';
import { GastoService } from './services/gasto.service';
import { Category } from './category';
import { CategoryService } from './services/categoria.service';
import { Gasto } from './gasto';
import { Balance } from './balance';
import { BalanceService } from './services/balance.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'Efi JS3- Angular- 2020';
 
 

  constructor(private balanceService: BalanceService){
 
    
  }
  hacerBalance(){
    console.log ("hace rbalanmce")
    this.balanceService.addToBalance();

  }
}
