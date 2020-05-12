const cachorro = {
    uivar: function () {
        console.log("Auuuuuuu");
    },
    latir: function () {
        console.log("Auauauauau");
    },
    rosnar: function () {
        console.log("Grrrrrr");
    },
    raca: "SRD",
    setRaca: function (raca) {
        this.raca = raca; //ESTA raca é igual a raca
    },
    getRaca: function () {
        return "A raça é " +this.raca;
    },
}

cachorro.latir();
cachorro.rosnar();
console.log(cachorro.raca);
cachorro.setRaca("Pastor Alemão"); //passei o parametro que pedia a raça do cachorro
console.log(cachorro.raca);
console.log(cachorro.getRaca());