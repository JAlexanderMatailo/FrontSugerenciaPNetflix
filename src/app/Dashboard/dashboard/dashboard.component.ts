import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Pelicula } from 'src/app/Interface/Pelicula';
import { ServiceService } from 'src/app/Services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  Peliscard: Pelicula[] = [];

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
          { title: 'card 5', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 },
        { title: 'card 5', cols: 1, rows: 1 }
      ];
    })
  );

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
