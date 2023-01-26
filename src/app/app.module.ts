import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { AgregarEditarProspectoComponent } from './components/agregar-editar-prospecto/agregar-editar-prospecto.component';
import { ListadoProspectoComponent } from './components/listado-prospecto/listado-prospecto.component';
import { VerProspectoComponent } from './components/ver-prospecto/ver-prospecto.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarProspectoComponent,
    ListadoProspectoComponent,
    VerProspectoComponent,
    DashboardComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
