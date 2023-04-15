import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes

import { ListadoProspectoComponent } from './components/listado-prospecto/listado-prospecto.component';
import { AgregarEditarProspectoComponent } from './components/agregar-editar-prospecto/agregar-editar-prospecto.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { VerProspectoComponent } from './components/ver-prospecto/ver-prospecto.component';
import { PaquetesComponent } from './components/paquetes/paquetes.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'listProspecto', component: ListadoProspectoComponent }, 
  { path: 'agregarProspecto', component: AgregarEditarProspectoComponent },
  { path: 'verProspecto/:id', component: VerProspectoComponent },
  { path: 'editarProspecto/:id', component: AgregarEditarProspectoComponent },
  { path: 'paquetes', component: PaquetesComponent },
  { path: 'acercaDe', component: AcercaDeComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
