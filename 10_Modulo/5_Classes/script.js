let cachorro = { //isso serve como molde para outras utilizações
    patas: 4,
    raca: "SRD",
    latir: function () {
        console.log("Au Au");
    }
}

let labrador = Object.create(cachorro); //eu crio labrador em cima de cachorro
labrador.latir();
labrador.raca = "Labrador";
console.log(labrador.raca);
console.log(cachorro.raca);

let pastor = Object.create(cachorro);
pastor.raca = "Pastor Alemão";
console.log(pastor.raca);

