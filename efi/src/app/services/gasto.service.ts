import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Gasto } from '../gasto';
import { GASTOS } from '../mock-gastos';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  gastos: Gasto[];


  

  constructor() {
    // this.gastos =GASTOS
   }

  getGastos(){
    if(localStorage.getItem('gastos') === null) {
      this.gastos = [];
    } else {
      this.gastos = JSON.parse(localStorage.getItem('gastos'));
    }
    return this.gastos;
  }


  addGasto(gasto: Gasto){
    this.gastos.push(gasto);
    let gastos = [];
    if (localStorage.getItem('gastos') === null){
      gastos = [];  
      gastos.push(gasto);
      localStorage.setItem('gastos', JSON.stringify(gastos));
    }else{
      gastos = JSON.parse(localStorage.getItem('gastos'));
      gastos.push(gasto);
      localStorage.setItem('gastos', JSON.stringify(gastos));
    }
    
  }

  deleteGasto (gasto: Gasto){
    for (let i = 0; i < this.gastos.length;i++){
      if (gasto == this.gastos[i])
        this.gastos.splice(i,1)
        localStorage.setItem('gastos', JSON.stringify(this.gastos));
    };
  }

  // getGastos(): Observable<Gasto[]>{
  //   return of(GASTOS);
  // }

  // getGasto(id: number): Observable<Gasto> {
  //   return of (GASTOS.find (gasto =>  gasto.id === id));
  // }
}
