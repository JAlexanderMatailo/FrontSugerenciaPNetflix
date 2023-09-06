import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  urlBase = environment.urlBase
  controladorNetflix = 'ServicesP/'

  constructor(private http: HttpClient) { }

  /*Usuario*/
  postUsuario(datosCliente:any){
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.post<any>(this.urlBase+this.controladorNetflix+'RegistroUsuario',datosCliente);
  }

  /*FinUsuario*/
  
  /*TipoPelicula*/
  postTipoPelicula(datosCliente:any){
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.post<any>(this.urlBase+this.controladorNetflix+'RegistroTipoPelicula',datosCliente);
  }
  
  getTiposP():Observable<any>{
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.get<any>(this.urlBase+this.controladorNetflix+'GetAllTipoPelicula');
  }
  /*FinTipoPelicula*/
  
  /*Pelicula*/
  postPelicula(datosCliente:any){
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.post<any>(this.urlBase+this.controladorNetflix+'RegistroPelicula',datosCliente);
  }

  getPeliculas():Observable<any>{
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')
    return this.http.get<any>(this.urlBase+this.controladorNetflix+'GetAllPeliculas');
    
  }


  /*FinPelicula*/


}
