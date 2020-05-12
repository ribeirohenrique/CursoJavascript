let numero = prompt("Digite o numero");
let divisoes = 0;

for (let contador = 1; contador <= numero; contador++){
    if (numero % contador == 0){
        divisoes++;
    }
}

if (divisoes == 2){
    console.log(`O numero ${numero} é primo`);
} else{
    console.log(`O numero ${numero} não é primo`);
}