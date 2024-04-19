


// definicion de arrays de un solo tipo
console.log("Tiposss en objetooosss =======")
const skills: string[] = ['html','css','javascript','React']


// tipar de manera estricta un objeto 

interface Programador{
    name: string;
    area:string;
    exp:number;
    skills:string[];
    //sueldo:number;
    sueldo?: number  ; // ? hace opcional el valor 
    showSueldo: ()=>void // deficnicion de una funcion como atributo 
}

// creando un objeto literal con tipado estatico
// propiedad es opcional porque tiene ?

const Lucas: Programador = {
    name: 'Lucas Mendoza',
    area: "backend",
    skills: skills,
    exp: 1,
    showSueldo (){
        console.log(`este es mi sueldo ${ this.sueldo}`);
    }
}

Lucas.sueldo = 4500;




console.log(Lucas);

const subirSueldo = ( programador:Programador, sueldo:number)=>{
    if (programador.sueldo === undefined) {
        programador.sueldo = 0;
    }
    programador.sueldo += sueldo;
};

subirSueldo(Lucas,488);

Lucas.showSueldo();


export {}