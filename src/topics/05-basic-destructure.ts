


interface AudioPlayer{
    audiioVolumen: number;
    songDuration:number;
    song:string;
    details:Details
}
interface Details{
    author:string;
    year:number
}
const audioPlayer: AudioPlayer ={
    audiioVolumen: 90,
    song: "salsa",
    songDuration: 78,
    details: {
        author: "junanito",
        year: 2001
    }
}

//const {} = audioPlayer; // destructuracion de objetos literales en typescript 

// consiste en extraer las propiedades de un objeto literal y salvarlas en una varibable 
// la variable puede tener el nombre de la propiedad o un alias  example

console.log("Mostrar objeto sin metodo de destructuracion ");
console.log("song ",audioPlayer.song);
console.log("duracion ", audioPlayer.songDuration)

const { song:songDst, songDuration:durationDst , details:detallesCancion  } = audioPlayer;

const { author } = detallesCancion;


console.log("Mostrar objeto con metodo de destructuracion ");
console.log("song ",songDst);
console.log("duracion ", durationDst);
console.log("Autor ", author)

// DESTRURACION DE ARREGLOS SE HACER POR POSCIONES



const arregloper:String[] = ["goku","napa","vegeta","gohan"]

const [ , , ,p4 = "no hay"] = arregloper;

console.log("Destructuradno arreglos");
// console.log("psicion 1,",p1);
// console.log("psicion 2,",p2);
// console.log("psicion 3,",p3);
console.log("psicion 4,",p4);

const [ p7,...p5 ] = arregloper;
console.log("psicion 5,",p5);
export {}