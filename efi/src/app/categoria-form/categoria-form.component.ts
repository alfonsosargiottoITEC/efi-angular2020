import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/categoria.service';


@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  constructor(private categoryService : CategoryService) {}

  ngOnInit(): void {
  }
  addCategory(newName: HTMLInputElement,newDetail: HTMLInputElement){
    console.log ('aagregando categoria: ', newName.value, newDetail.value);
    this.categoryService.addCategory({
      name: newName.value,
      detail: newDetail.value,
      hide: true
    });
    
    newName.value='',
    newDetail.value=''
    

    newName.focus();
    return false;
  }

}
