import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/Interface/Pelicula';
import { TipoPelicula } from 'src/app/Interface/TipoPelicula';
import { TipoPeliculas } from 'src/app/Interface/Usuario';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
  tiposPel = new FormControl('');
  public tiposP : any[]=[];
  isChecked: string = "";
  listGenero: TipoPeliculas[]=[];

  constructor(
    private usuarioService: ServiceService,
    private router: Router
  ) {  }
  pelicula: Pelicula={
    nombre_pelicula: "",
    duracion_pelicula: "",
    imagen : "",
    tipos_pelicula: [{ nombre_TipoPelicula: ""}]
  }

  ngOnInit(): void {
    this.obtenerTiposPelicula();
  }

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
  }

  ingresarTiposPelicula(){
    var cadenas=this.isChecked.toString().split(",");
     console.log("primero", cadenas);
     for(var cadena of cadenas){
      var cadenaO : TipoPelicula = {
        iD_TipoPelicula : Number.parseInt(cadena) ,
        nombre_TipoPelicula : ""
      }; // Crear una nueva instancia de TipoPeliculas en cada iteración
      console.log("segundo", cadenaO);
      this.listGenero.push(cadenaO);// Agregar la instancia al nuevo array    
     } // Asignar el nuevo array a this.listGenero
     this.pelicula.tipos_pelicula = this.listGenero;
     console.log("terceroN", this.pelicula.nombre_pelicula);
     console.log("Imagen", this.pelicula.imagen);
     console.log("tercero", this.pelicula.tipos_pelicula);
     this.pelicula.imagen = this.selectedImage;

     if(this.pelicula.tipos_pelicula){
      this.usuarioService.postPelicula(this.pelicula).subscribe(resp =>{
        console.log("VARIABLES QUE LLEGAN: ", this.isChecked)
        console.log("Loque llega:", this.pelicula);
        console.log(resp)
      })
     }
     
  }

  obtenerTiposPelicula(){
    this.tiposP = []
    this.usuarioService.getTiposP().subscribe( resp=>{
      console.log(resp)
      this.tiposP = resp
    }
    )
  }

  selectedImage: string = "";
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
        console.log("Esta es el base64",this.selectedImage);
      };
      reader.readAsDataURL(file);
    }
  }


}
