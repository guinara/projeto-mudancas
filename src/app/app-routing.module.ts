import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaibaMaisComponentComponent } from './saiba-mais-component/saiba-mais-component.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'SaibaMais', component: SaibaMaisComponentComponent },
  { path: 'Inicio', component: InicioComponent },
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
