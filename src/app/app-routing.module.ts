import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { TipoPeliculaComponent } from './Componentes/tipo-pelicula/tipo-pelicula.component';
import { PeliculaComponent } from './Componentes/pelicula/pelicula.component';

const routes: Routes = [
  {path : "home" , component: HomeComponent  },
  {path : "nav" , component: NavigationComponent  },
 
  {path : "usuario" ,  component: UsuarioComponent  },
  {path : "tipopelicula" , component: TipoPeliculaComponent  },
  {path : "pelicula" ,  component: PeliculaComponent  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
