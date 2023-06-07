import { MandarService } from './../tareas/MandarDatos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-isesion',
  templateUrl: './isesion.component.html',
  styleUrls: ['./isesion.component.css'],
})
export class IsesionComponent implements OnInit {

  ngOnInit(): void {
    this.responseSuccessful = false;
    this.loginStatus = false;
  }

  constructor(
    private router: Router,
    private location: Location,
    private http: HttpClient,
    private mandar: MandarService
  ) {}

  inputValue!: string;
  usuario: string | any;
  contrasena: string | any;
  responseSuccessful = false;
  loginStatus = false;

  btnDeshabilitado: boolean = true;

  habilitarBtn() {
    this.btnDeshabilitado = false;
  }
  deshabilitarBtn() {
    this.btnDeshabilitado = true;
  }

  validarInput() {
    if (this.inputValue.length >= 10) {
      //habilitar
      this.habilitarBtn();
    }
  }
  async login(usuario: any, contraseña: any) {
    if (
      usuario != null &&
      usuario !== '' &&
      contraseña != null &&
      contraseña !== ''
    ) {
      let response$: any;

      try {
        let url ='http://192.168.137.1:3000/usuarios/login/'+usuario+','+contraseña;
        response$ = this.http.get(url);
        response$.subscribe(
          (response: any) => {
            this.mandar.setUsuario(response.correo_usuario);
            this.responseSuccessful = true;
            this.loginStatus = true;
          },
          (error: any) => {
            console.log(response$.headers);

            console.log('Error en la solicitud:', error);
            this.responseSuccessful = false;
          }
        );
      } catch (error) {
        this.responseSuccessful = false;
        this.loginStatus = false;
      }

      return this.responseSuccessful;
    } else {
      console.log('Sin Datos');
      return false;
    }
  }

  async IniciarSesion() {
    const loginSuccessful = await this.login(this.usuario, this.contrasena);
    console.log(this.loginStatus)
    if (loginSuccessful && this.loginStatus == true) {
      console.log('Datos: ', this.mandar.getUsuario());
      this.router.navigate(['/perfil']);
    } else {
      console.log("Datos Invalidos")
    }
  }

  updateUsername(event: Event): void {
    this.usuario = (event.target as HTMLInputElement).value;
  }

  updatePassword(event: Event): void {
    this.contrasena = (event.target as HTMLInputElement).value;
  }
}
