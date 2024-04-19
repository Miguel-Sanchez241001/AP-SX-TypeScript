

// evitar usar any  sintaxis para genericos
export function mitipo<T>( arg:T):T {
    return arg;
}


// USO DE GENERICO 
const result = mitipo<string>("no ayudo");
let resultNumber = mitipo<number>(45);
let resultrreglo = mitipo<number[]>([45]);


// permite reconocer los objetos 
console.log(result.split(' '));
console.log(resultNumber.toFixed());
console.log(resultrreglo.slice());