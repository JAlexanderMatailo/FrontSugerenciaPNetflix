

export interface Pelicula{
    ID_Pelicula? : number ;
    nombre_pelicula: string;
    duracion_pelicula: string;
    imagen : string;
    tipos_pelicula?: TipoPelicula[];
}

export interface TipoPelicula{
    iD_TipoPelicula? : number ;
    nombre_TipoPelicula: string;
}