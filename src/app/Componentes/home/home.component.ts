import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/Interface/Pelicula';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Peliscard: Pelicula[] = [];

  ngOnInit(): void {
    this.obtenerPeliculas();
  }
  pelicula: Pelicula={
    nombre_pelicula: "",
    duracion_pelicula: "",
    imagen : "",
    tipos_pelicula: [{ nombre_TipoPelicula: ""}]
  }
  
  constructor(
    private usuarioService: ServiceService,
    private router: Router
  ) {
    
  }
  obtenerPeliculas(){
    
    this.Peliscard = []
    this.usuarioService.getPeliculas().subscribe( resp=>{
      console.log(resp)
      this.Peliscard = resp
    }
    )
  }

}
