




// defininos la propiedad como opcional con el operador ?
export interface Passenger{
    name:string;
    children?:string []
    
}


const one:Passenger = {
    name: "jose",
    children:[
        "hijo1","hijo2"
    ]
}

const teo:Passenger = {
    name: "ana",
    children:[
        "hijo1","hijo2"
    ]
}

const tres:Passenger = {
    name: "luis"
}


const HowManyChildren = ( pasajerp:Passenger) :number=>{

    //const total = pasajerp.children.length || 0 ; // esta sentencia da error porque el valor de children puede er indefinido
    const total = pasajerp.children?.length || 0 ; // aqui decimos que evaluamos si viene el valor si es asi obtnemos la dimension del arreglo sino damos 0
   
  //const total = pasajerp.children!.length ; // aqui le aseguramos a TypeScript que siempre vendra un valor para este atributo 
  console.log("total hijos");
    console.log(`${pasajerp.name} tiene ${total} hijos`);
    
    return total;
}



HowManyChildren(tres);