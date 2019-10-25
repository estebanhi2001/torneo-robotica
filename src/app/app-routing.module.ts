import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ronda1Component } from './ronda1/ronda1.component';
import { Ronda2Component } from './ronda2/ronda2.component';
import { PuntajesFinalesComponent } from './puntajesfinales/puntajesfinales.component';
import { EnvivoComponent } from './envivo/envivo.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { DesafiosComponent } from './desafios/desafios.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [{
  path: 'ronda1',
  component: Ronda1Component
}, {
  path: 'desafios',
  component: DesafiosComponent
}, {
  path: 'ronda2',
  component: Ronda2Component
}, {
  path: 'puntajesfinales',
  component: PuntajesFinalesComponent
}, {
  path: 'envivo',
  component: EnvivoComponent
}, {
  path: '',
  component: BienvenidaComponent
}, {
  path: 'admin',
  component: AdminComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
