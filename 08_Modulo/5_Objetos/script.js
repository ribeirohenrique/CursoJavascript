let cachorro = {
    patas: 4,
    nome: "Bode",
    latir: function () {
        console.log("Au Au");
    }
};

let moradores = {
    pessoas: 4,
    nomeMae: "Rosilene",
    nomePai: "Herlito",
    nomeFilho: "Henrique",
    juntar: function () {
        console.log(moradores.nomeFilho, " " + moradores.nomeMae, " "+ moradores.nomePai);
    }
}

console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir();

console.log(moradores.pessoas);
moradores.juntar();