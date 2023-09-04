import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { TipoPeliculaComponent } from './Componentes/tipo-pelicula/tipo-pelicula.component';
import { PeliculaComponent } from './Componentes/pelicula/pelicula.component';
import { HomeComponent } from './Componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    TipoPeliculaComponent,
    PeliculaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
