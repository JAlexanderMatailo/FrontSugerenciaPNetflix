import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoPelicula } from 'src/app/Interface/TipoPelicula';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-tipo-pelicula',
  templateUrl: './tipo-pelicula.component.html',
  styleUrls: ['./tipo-pelicula.component.css']
})
export class TipoPeliculaComponent {

  PeliculaTipo: TipoPelicula = {
    nombre_TipoPelicula: ""
  }

  nombre_TipoP: string = "";

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
  }

  constructor(
    private usuarioService: ServiceService,
    private router: Router
  ) {
    
  }

  ingresarTipos(){
    this.PeliculaTipo.nombre_TipoPelicula = this.nombre_TipoP;
    console.log(this.PeliculaTipo);

    this.usuarioService.postTipoPelicula(this.PeliculaTipo).subscribe(resp =>{
      console.log(resp)
    })
  }

  limpiarCampos() {
    close();
  }

}
