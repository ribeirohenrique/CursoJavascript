let elemento = document.querySelector('#titulo-principal');

console.log("largura " + elemento.offsetWidth); //considera bordas
console.log("altura " + elemento.offsetHeight);

console.log("largura " + elemento.clientWidth); //não considera bordas
console.log("altura " + elemento.clientHeight);
