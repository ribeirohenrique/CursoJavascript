function numeroRandom(max) {
    return Math.floor(Math.random() * max) + 1; //arredondar pra baixo
}

console.log(numeroRandom(10));
console.log(numeroRandom(20));
console.log(numeroRandom(5));