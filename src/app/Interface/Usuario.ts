export interface Usuario{
    ID_Usuario? : number ;
    nombre_Usuario: string;
    fecha_nacimiento?: Date;
}

export interface TipoPelicula{
    ID_TipoPelicula? : number ;
    Nombre_TipoPelicula: string;
}

export interface Pelicula{
    ID_Pelicula? : number ;
    nombre_pelicula: string;
    duracion_peliucla: string;
    imagen : string;
}