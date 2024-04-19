

function sumar(num1:number,num2:number):number{
    return num1+num2;
}

const resul:number = sumar(25,48); 


const multiplicar = (num3:number, num4:number):string =>{
    return `${num3*num4}`;
}


// funciones con valore opcionales

const elevar = (base:number, expo?:number, milti:number = 10):number =>{
    return   base  * milti ;
}

const resul2:string = multiplicar(48,45);
const resul3:number = elevar(48);

console.log({resul,resul2,resul3})
export {}