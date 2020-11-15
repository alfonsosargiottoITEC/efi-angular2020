import { Component, OnInit, Input } from '@angular/core';
import { Gasto } from '../gasto';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GastoService } from '../services/gasto.service';

@Component({
  selector: 'app-gasto-detail',
  templateUrl: './gasto-detail.component.html',
  styleUrls: ['./gasto-detail.component.css']
})
export class GastoDetailComponent implements OnInit {


  @Input() gasto: Gasto;
  
  constructor(
    private route: ActivatedRoute,
    private gastoService: GastoService,
    private location: Location

  ) {}

  ngOnInit(): void {
    // this.getGasto();
  }

  // getGasto(): void{
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.gastoService.getGasto(id)
  //   .subscribe(gasto => this.gasto = gasto);
  // }

}
