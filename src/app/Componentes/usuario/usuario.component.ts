import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from 'src/app/Interface/Usuario';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {


 public usuario: Usuario= {
    ID_Usuario:0,
    nombre_Usuario: "",
    fecha_nacimiento: new Date()
  }
  
  constructor(
    private usuarioService: ServiceService,
    private router: Router
  ) {
    
  }
  guardarUsuario(){
    this.usuarioService.postUsuario(this.usuario).subscribe(resp =>{
      console.log(resp)
    })
  }
}
