import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/categoria.service';
import { Category } from '../category';


@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {


  categorias: Category[];

  constructor(
    public categoryService: CategoryService
  ) { }




  ngOnInit(): void {
    this.categorias = this.categoryService.getCategorias();

  }

  addCategory(category: Category){
    this.categoryService.addCategory(category);
  }

  

}
