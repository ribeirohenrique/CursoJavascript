console.log("COM FOR");
let num = 1;
let num2 = 5;
let num3 = 6;
let num4 = 8;

function imprimirNumeros(... args) {
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);

    }

}

imprimirNumeros(num,num2,num3);
console.log("pausa");
imprimirNumeros(num2,num3,num4);
console.log("pausa");
imprimirNumeros(2,6,8,7,4,5,6,8);


console.log("COM WHILE");
let num5 = 5;
let num6 = 10;
let num7 = 15;
let num8 = 20;

function imprimirNumeros2(... args) {
    impCont = 0
    while (impCont < args.length){
        console.log(args[impCont]);
        impCont++
    }

}

imprimirNumeros2(num5,num6,num7);
console.log("pausa");
imprimirNumeros2(num5,num8);
console.log("pausa");
imprimirNumeros2(20,10,5,2);