


// clases en typescript 


export class Person{
    // Codigo tradicional para crear atributos y asignar atributos a una clase
//     public name: string ;
//     public edad?: number;
// // mantiene modificadores de acceso a las propiedades
//     constructor(name:string, eda:number){
//         this.name =name;
//         this.edad =eda;
//     }


//  codigo angular creacion de atributos y signacion en el mismo constructor

constructor(
    public name:string,
    public edad:number = 10
){}

}


// herenciaaa
// export class Hero extends Person{
//     constructor(
//         public nombre:string,
//         public edad:number,
//         public poder:string,
//     ){
//         super(nombre,edad)
//     }
// }

// alterniatica a herencia para hacer mas legible y claro el codigo 

export class Hero{
    constructor(
        public nombre:string,
        public edad:number,
        public poder:string,
        public person:Person
    ){
         
    }
}


const lucs = new Person("Juaquin",45);

const Doctor = new Hero("Jose torres",78,"volar",lucs);

caches;console.log(Doctor);
