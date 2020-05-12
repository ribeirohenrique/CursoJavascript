let frase = "Uma carrocinha de cachorro quente";

let palavras = frase.split(" "); //primeiro corta o espaço com split
let novaFrase = palavras.join("-"); // depois insere o caractere com join
console.log(novaFrase);
