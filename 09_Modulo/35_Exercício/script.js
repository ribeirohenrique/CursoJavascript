const calculadora = {
    somar: function (x,y) {
        return x + y;
    },
    subtrair: function (x,y) {
        return x - y;
    },
    multiplicar: function (x,y) {
        return x * y;
    },
    dividir: function (x,y) {
        return x / y;
    },
}

console.log(calculadora.somar(2,2));
console.log(calculadora.subtrair(2,2));
console.log(calculadora.multiplicar(2,2));
console.log(calculadora.dividir(2,2));