let nome = "Henrique";
let idade = 21;

if (nome != undefined && nome == "Pedro"){
    console.log(`Nome está definido como: ${nome}`);
} else if (nome == "Henrique" && nome.length > 3 && idade == 50){
    console.log(`O nome é ${nome}`);
} else {
    console.log(`Não é ${nome}`);
}

if (1 > 2){
    console.log("Teste");
} else if (1 == 1){
    console.log("Testando");
}