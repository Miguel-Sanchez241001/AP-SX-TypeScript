// Esto es un comentario de línea

/*
Esto es un comentario
de bloque
*/
// DECLARACION DE VARAIBLES

let name: string = 'Miguel';

let edad: number = 48;

// variable qjue sopportar otros tipos de daots 

let casado:number | String = 1;

casado = "SI";

// variable que soporta otro tipo por defecto

let hijos :number | "ninguno" = 1;

hijos = 2;


// mostrando varaibles 

console.log({
    name,casado,edad,hijos
})



export {}
