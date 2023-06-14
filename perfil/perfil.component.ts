import { Component, OnInit } from '@angular/core';
import { MandarService } from '../tareas/MandarDatos.service';
import { HttpClient } from '@angular/common/http';
import { CacheService } from '../cache/cache.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  constructor(
    private mandar: CacheService,
    private http: HttpClient
  ) {}

  ID_Usuario: string | any;

  Nombre_Usuario: string  = '';
  Apellido_Usuario: string = '';
  Correo_Usuario: string = '';
  Edad_Usuario: string = '';
  Sexo_Usuario: string = '';
  IMC_Usuario: string = '';
  Estatura_Usuario: string|any;
  NivelEstres_Usuario: string= '';
  response$: any;

  async ngOnInit() {
    this.ID_Usuario = await this.mandar.obtener_DatoLocal("Usuario");
    this.ObtenerDatos(this.ID_Usuario);
  }

  async ObtenerDatos(Usuario: string) {
    let url = 'http://192.168.137.1:3000/usuarios/correo/' + Usuario

    this.response$ = await this.http.get(url);
    this.response$.subscribe(
      (datos: any) => {
        console.log(datos)
        this.Nombre_Usuario = datos.nombre_usuario;
        this.Apellido_Usuario = datos.apellidos_usuario;
        this.Correo_Usuario = datos.correo_usuario;
        this.Edad_Usuario = datos.edad_usuario;
        this.Sexo_Usuario = datos.sexo_usuario;
        this.IMC_Usuario = datos.IMC_usuario;
        this.Estatura_Usuario=datos.estatura;
        this.NivelEstres_Usuario=datos.nivelEstres_usuario || "Vacio";
      },
      (error: any) => {
        console.log(this.response$.headers);

        console.log('Error en la solicitud:', error);
      }
    );
  }

}
