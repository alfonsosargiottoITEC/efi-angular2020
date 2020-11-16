import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Category } from '../category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categorias: Category[];

  

  constructor() {

   }

  getCategorias(){
    if(localStorage.getItem('categorias') === null) {
      this.categorias = [];
    } else {
      this.categorias = JSON.parse(localStorage.getItem('categorias'));
    }

    return this.categorias;
  }
  


  addCategory(category: Category){
    this.categorias.push(category);
    let categorias = [];
    if (localStorage.getItem('categorias') === null){
      categorias = [];  
      categorias.push(category);
      localStorage.setItem('categorias', JSON.stringify(categorias));
    }else{
      categorias = JSON.parse(localStorage.getItem('categorias'));
      categorias.push(category);
      localStorage.setItem('categorias', JSON.stringify(categorias));
    }
    
  }

  deleteCategory (category: Category){
    for (let i = 0; i < this.categorias.length;i++){
      if (category == this.categorias[i])
        this.categorias.splice(i,1)
        localStorage.setItem('categorias', JSON.stringify(this.categorias));
    };
  }
}
