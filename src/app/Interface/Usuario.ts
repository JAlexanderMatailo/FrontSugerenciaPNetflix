export interface Usuario{
    ID_Usuario? : number ;
    nombre_Usuario: string;
    fecha_nacimiento?: Date;
    tipos?: TipoPeliculas[];
}

export interface TipoPeliculas{
    iD_TipoPelicula? : number ;
    nombre_TipoPelicula: string;
}

