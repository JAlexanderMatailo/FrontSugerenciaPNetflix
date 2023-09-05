import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  urlBase = environment.urlBase
  controladorPersonas = 'ServicesP/'

  constructor(private http: HttpClient) { }

  /*Usuario*/
  postUsuario(datosCliente:any){
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.post<any>(this.urlBase+this.controladorPersonas+'RegistroUsuario',datosCliente);
  }

  /*FinUsuario*/
  
  /*TipoPelicula*/
  postTipoPelicula(datosCliente:any){
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')

    return this.http.post<any>(this.urlBase+this.controladorPersonas+'RegistroTipoPelicula',datosCliente);
  }
  
  getTiposP():Observable<any>{
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.get<any>(this.urlBase+this.controladorPersonas+'GetAllTipoPelicula');
  }
  /*FinTipoPelicula*/
  
  /*Pelicula*/
  postPelicula(datosCliente:any){
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.post<any>(this.urlBase+this.controladorPersonas+'RegistroPelicula',datosCliente);
  }
  /*FinPelicula*/


}
