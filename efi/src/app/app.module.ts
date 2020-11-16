import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalancesComponent } from './balances/balances.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { GastosComponent } from './gastos/gastos.component';
import { GastoDetailComponent } from './gasto-detail/gasto-detail.component';
import { GastoService } from './services/gasto.service';
import { GastoListComponent } from './gasto-list/gasto-list.component';
import { GastoFormComponent } from './gasto-form/gasto-form.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BalanceListComponent } from './balance-list/balance-list.component';
import { BalancepipePipe } from './pipes/balancepipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BalancesComponent,
    CategoriasComponent,
    GastosComponent,
    GastoDetailComponent,
    GastoListComponent,
    GastoFormComponent,
    CategoriaFormComponent,
    CategoriaListComponent,
    FilterPipe,
    BalanceListComponent,
    BalancepipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'categoria-list', component: CategoriaListComponent},
      {path: 'gasto-list', component: GastoListComponent},
      {path: 'balance-list', component: BalanceListComponent}
    ]),
  ],
  providers: [GastoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

