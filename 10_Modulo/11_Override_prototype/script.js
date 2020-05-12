class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au au");
    }
}

Cachorro.prototype.patas = 4;
Cachorro.prototype.raca = "SRD";

let labrador = new Cachorro("labrador", "amarelo");
console.log(labrador.patas);
labrador.latir();
console.log(Cachorro.prototype.raca);
console.log(labrador.raca);