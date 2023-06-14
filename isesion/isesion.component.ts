import { MandarService } from "./../tareas/MandarDatos.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CacheService } from "../cache/cache.service";

@Component({
  selector: "app-isesion",
  templateUrl: "./isesion.component.html",
  styleUrls: ["./isesion.component.css"],
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
    private mandar: CacheService
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
      usuario !== "" &&
      contraseña != null &&
      contraseña !== ""
    ) {
      let response$: any;

      try {
        let url =
          "http://192.168.137.1:3000/usuarios/login/" +
          usuario +
          "," +
          contraseña;
        response$ = this.http.get(url);
        response$.subscribe(
          (response: any) => {
            this.mandar.guardar_DatoLocal("Usuario", response.correo_usuario);
            this.responseSuccessful = true;
            this.loginStatus = true;
          },
          (error: any) => {
            console.log(response$.headers);

            console.log("Error en la solicitud:", error);
            this.responseSuccessful = false;
          }
        );
      } catch (error) {
        this.responseSuccessful = false;
        this.loginStatus = false;
      }

      return this.responseSuccessful;
    } else {
      console.log("Sin Datos");
      return false;
    }
  }

  async IniciarSesion() {
    const loginSuccessful = await this.login(this.usuario, this.contrasena);
    console.log(this.loginStatus);
    if (loginSuccessful && this.loginStatus == true) {
      console.log("Datos: ", this.mandar.obtener_DatoLocal("Usuario"));
      this.AsignarTareasEstres();
      this.AsignarTareasIMC();
      this.router.navigate(["/tarea"]);
      this.location.go;
    } else {
      console.log("Datos Invalidos");
    }
  }

  async AsignarTareasEstres() {
    let correo = "zS21004506@estudiantes.uv.mx";
    let nivelestres="Bajo";
    let header = new HttpHeaders().set("Type", "aplication/json");
    let url = "http://192.168.137.1:3000/usuario-act-estres/asignarAct/"+correo+','+nivelestres;
    this.http.post(url, {header: header}).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  async AsignarTareasIMC() {
    let correo = "zS21004506@estudiantes.uv.mx";
    let nivelIMC="Bajo";
    let header = new HttpHeaders().set("Type", "aplication/json");

    let url = "http://192.168.137.1:3000/usuario-act-imc/asignarAct/"+correo+',A,' + nivelIMC;
    this.http.post(url, {header: header}).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    ) 

    url = "http://192.168.137.1:3000/usuario-act-imc/asignarAct/"+correo+',E,' + nivelIMC;
    this.http.post(url, {header: header}).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  updateUsername(event: Event): void {
    this.usuario = (event.target as HTMLInputElement).value;
  }

  updatePassword(event: Event): void {
    this.contrasena = (event.target as HTMLInputElement).value;
  }
}
