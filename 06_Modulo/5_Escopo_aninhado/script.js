let a = 10;

function multiplicar(x,y) {
    let a = x * y;
    if (a > 10){ //ação só é executada se resultado dos numeros passados pra function excedam "10"
        let a = 0;
        a++;
        console.log("Valor dentro do if dentro da function " +a);
    }
    console.log("Valor dentro da function " +a);
}

console.log("Valor na raiz principal " +a);
multiplicar(2,6);