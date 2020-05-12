function verificaDado(dado) {
    if (typeof dado === "string"){
        console.log("É string");
    } else if (typeof dado === "number"){
        console.log("É number");
    } else if (typeof dado === "boolean"){
        console.log("É boolean");
    }
}

console.log(verificaDado("olá"));
console.log(verificaDado(1));
console.log(verificaDado(true));