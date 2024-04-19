

export interface Product {
    descioncion:string;
    price:number;

}

const phono:Product = {
    descioncion: "huawei",
    price: 45.6
}

const tele: Product = {
    descioncion: "sansung",
    price: 1582.64
}

const  cartShop = [tele,phono];
const interes = 0.18

interface IntereCalculatoProd{
    interes:number;
    productos:Product[]
}
export function interesCalculado( opciones :IntereCalculatoProd):number[] {
    let total = 0;

    const { productos, interes} = opciones;

    // productos.forEach(p => {
    //     total += p.price;
    // })

    productos.forEach(({price}) => {
        total +=  price;
    })
    return [total,total*interes];
}
// solcuion MIGUEL
// const resul = interesCalculado({
//     productos:cartShop,
//     interes:interes
// })

// const [total,interest] = resul;

// SOLUCION FERNADO HERRERA 
const [total,interest] = interesCalculado({
    productos:cartShop,
    interes:interes
})

console.log("total ",total);
console.log("interes ",interest);
 