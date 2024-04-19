import { Product,interesCalculado } from "./06-function-destruturin";


const carshop: Product[] = [
    {
        descioncion:"cell",
        price:4833
    },
    {
        descioncion:"celular",
        price:422
    },
];

const [total, tax ] = interesCalculado({
    interes: 0.15,
    productos:carshop
});

console.log("total page 7", total);
console.log("total intere 7",tax);