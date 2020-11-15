import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalancesComponent } from './balances/balances.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { GastosComponent } from './gastos/gastos.component';
import { GastoDetailComponent } from './gasto-detail/gasto-detail.component';
import { GastoService } from './gasto.service';
import { GastoListComponent } from './gasto-list/gasto-list.component';
import { GastoFormComponent } from './gasto-form/gasto-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BalancesComponent,
    CategoriasComponent,
    GastosComponent,
    GastoDetailComponent,
    GastoListComponent,
    GastoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GastoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
