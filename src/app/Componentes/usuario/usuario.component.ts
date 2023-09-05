import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from 'src/app/Interface/Usuario';
import { ServiceService } from 'src/app/Services/service.service';
import { TipoPelicula } from '../../Interface/Usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {
public tiposP : any[]=[];

 usuario: Usuario= {
    ID_Usuario:0,
    nombre_Usuario: "",
    fecha_nacimiento: new Date()
  }

  tipoP: TipoPelicula = {
    ID_TipoPelicula: 0,
    Nombre_TipoPelicula: ""
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
    this.usuarioService.postUsuario(this.usuario).subscribe(resp =>{
      console.log(resp)
    })
    this.limpiarCampos();
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
