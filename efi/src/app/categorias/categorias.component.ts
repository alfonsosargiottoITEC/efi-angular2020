import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../services/categoria.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {


  @Input () category:Category;

  categorias: Category[];

  constructor(
    public categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  deleteCategory(category: Category){

    if (confirm('¿Estas seguro que querés eliminar este registro?')){

      this.categoryService.deleteCategory(category);
    }
  }
 
 }