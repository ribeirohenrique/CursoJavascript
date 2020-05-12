let listaArray1 = [0, 5, 10, 15, 20, 25];
let listaArray2 = [0, 5, 10, 15];

function verificaArray(nomeArray) {
    if (nomeArray.length < 5){
        console.log("Poucos Elementos");
    } else {
        console.log("Muitos Elementos");
    }

}

verificaArray(listaArray1);
verificaArray(listaArray2);