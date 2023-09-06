import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario, TipoPeliculas } from 'src/app/Interface/Usuario';
import { ServiceService } from 'src/app/Services/service.service';
import { FormControl } from '@angular/forms';
import { TipoPelicula } from 'src/app/Interface/TipoPelicula';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {
  tiposPel = new FormControl('');
  public tiposP : any[]=[];

//listaDeGeneros: Genero[] = [];
listGenero: TipoPeliculas[]=[];

isChecked: string = "";


 usuario: Usuario= {
    nombre_Usuario: "",
    fecha_nacimiento: new Date(),
    tipos: [{ nombre_TipoPelicula: ""}] // Agrega un elemento inicial en la lista
  }
  
  ngOnInit(): void {
    this.obtenerTiposPelicula();
  }

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
  }

  constructor(
    private usuarioService: ServiceService,
    private router: Router
  ) {
    
  }
  ingresarUsuario(){
      
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
     this.usuario.tipos = this.listGenero;
     console.log("tercero", this.usuario.tipos);
     if(this.usuario.tipos){
      this.usuarioService.postUsuario(this.usuario).subscribe(resp =>{
        //console.log("VARIABLES QUE LLEGAN: ", cadena)
        console.log("VARIABLES QUE LLEGAN: ", this.isChecked)
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

  

  limpiarCampos() {
    close();
  }
}

