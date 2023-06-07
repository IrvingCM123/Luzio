import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MandarService{
    Nivel_IMC: string= 'Normal';
    Nivel_Estres: string='Bajo';
    Id_Usuario: string="";

    setIMC(valor: any){
        this.Nivel_IMC=valor;
        console.log(valor)
    }

    setUsuario(valor: any) {
      this.Id_Usuario = valor;
    }

    setEstres(valor: any){
        this.Nivel_Estres=valor;
    }

    getIMC(){
        return this.Nivel_IMC;
    }

    getEstres(){
        return this.Nivel_Estres;
    }

    getUsuario(){
      return this.Id_Usuario;
    }

}
