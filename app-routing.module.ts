import { NgModule, importProvidersFrom } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsesionComponent } from './isesion/isesion.component';
import { RegistroComponent } from './registro/registro.component';
import { TestComponent } from './test/test.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { TestFinalComponent } from './test-final/test-final.component';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { TareasComponent } from './tareas/tareas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

//deben importarse todos los componentes y registrarlos en el path

const routes: Routes = [
  {path:'',component:IsesionComponent},
  {path:'isesion',component:IsesionComponent},
  {path:'registro',component:RegistroComponent},
  {path: 'test',component:TestComponent},
  {path: 'tarea',component:TareasComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'comentarios',component:ComentariosComponent},
  {path: 'preguntas', component:PreguntasComponent},
  {path: 'test-final', component:TestFinalComponent},
  {path: 'nav-home',component:NavHomeComponent}

];

export const appRoutingProviders: any[]=[];

//export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
