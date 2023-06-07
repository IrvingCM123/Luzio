import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
//1. importa las rutas creadas

import { appRoutingProviders} from "./app-routing.module";
import { AppRoutingModule } from './app-routing.module';

//2. importa los componentes
import { AppComponent } from './app.component';
import { IsesionComponent } from './isesion/isesion.component';
import { RegistroComponent } from './registro/registro.component';
import { TestComponent } from './test/test.component';
import { TareasComponent } from './tareas/tareas.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { TestFinalComponent } from './test-final/test-final.component';
import { NavHomeComponent } from './nav-home/nav-home.component';


@NgModule({
  declarations: [
    AppComponent,
    IsesionComponent,
    RegistroComponent,
    TestComponent,
    TareasComponent,
    ComentariosComponent,
    PerfilComponent,
    PreguntasComponent,
    TestFinalComponent,
    NavHomeComponent
  ],
  imports: [ BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
