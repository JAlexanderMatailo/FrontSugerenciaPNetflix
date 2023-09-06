

export interface Pelicula{
    ID_Pelicula? : number ;
    nombre_pelicula: string;
    duracion_peliucla: string;
    imagen : string;
    tipos?: TipoPelicula[];
}

export interface TipoPelicula{
    iD_TipoPelicula? : number ;
    nombre_TipoPelicula: string;
}