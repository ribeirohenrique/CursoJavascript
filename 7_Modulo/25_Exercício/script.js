function retornoNumero(num) {
    for (let y = num; y >= 0; y--){ //declara que o y é o "contador" e o num é a variavel inicial
        if (y % 2 == 0){ // se o resto de Y que é igual ao passado pra function, executa o comando.
            console.log(y);
        }
    }
}

console.log(retornoNumero(10));
console.log(retornoNumero(20));