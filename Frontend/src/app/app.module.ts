import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { FormacionComponent } from './components/formacion/formacion.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    PresentacionComponent,
    ProyectosComponent,
    AptitudesComponent,
    FormacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
