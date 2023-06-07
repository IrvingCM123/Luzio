import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  private apiUrl = 'http://localhost:3000/api'; // URL de tu API

  constructor(private http: HttpClient) {}

  getDatos() {
    return this.http.get(`${this.apiUrl}/datos`);
  }

  crearDato(dato: any) {
    return this.http.post(`${this.apiUrl}/datos`, dato);
  }

  // Agrega métodos adicionales para otras operaciones CRUD
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-luzio';
}
