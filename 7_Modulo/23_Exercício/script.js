function contaLetras(caracteres) {
    if (caracteres.length > 10){
        console.log("Texto muito grande");
    } else {
        console.log("Texto ok");
    }
}

console.log(contaLetras("testando"));
console.log(contaLetras("testando a quantidade de caracteres"));
