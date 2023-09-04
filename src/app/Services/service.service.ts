import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments.development';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  urlBase = environment.urlBase
  controladorPersonas = 'TipoPelicula/'

  constructor(private http: HttpClient) { }

  /*Usuario*/
  postUsuario(datosCliente:any){

    return this.http.post<any>(this.urlBase+this.controladorPersonas+'RegistroUsuario',datosCliente);
  }

  /*FinUsuario*/
  
  /*TipoPelicula*/
  postTipoPelicula(datosCliente:any){

    return this.http.post<any>(this.urlBase+this.controladorPersonas+'RegistroUsuario',datosCliente);
  }
  /*FinTipoPelicula*/
  
  /*Pelicula*/
  postPelicula(datosCliente:any){

    return this.http.post<any>(this.urlBase+this.controladorPersonas+'RegistroUsuario',datosCliente);
  }
  /*FinPelicula*/


}
