import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Gasto } from '../gasto';
import { Category } from '../category';
import { Balance } from '../balance';


@Injectable({ // decorador para marcar una clase como disponible para ser provista e injectada como una dependencia
  providedIn: 'root'
})
export class GastoService { // nombre del servicio

  gastos: Gasto[];  // usamos la interface de Gasto

  constructor() {
   
   }  

  getGastos(){ // método del servicio para obtener los gastos
    if(localStorage.getItem('gastos') === null) {  // busca el elemento 'gastos' en la local storage
      this.gastos = [];
    } else {
      this.gastos = JSON.parse(localStorage.getItem('gastos'));
    }
    return this.gastos; // los retorna
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
    };
    
    
  }

  deleteGasto (gasto: Gasto){
    for (let i = 0; i < this.gastos.length;i++){
      if (gasto == this.gastos[i])
        this.gastos.splice(i,1)
        localStorage.setItem('gastos', JSON.stringify(this.gastos));
        
    };
  }

  clearGastos (){
    localStorage.removeItem('gastos');
  }

  // getGastos(): Observable<Gasto[]>{
  //   return of(GASTOS);
  // }

  // getGasto(id: number): Observable<Gasto> {
  //   return of (GASTOS.find (gasto =>  gasto.id === id));
  // }
}
