const dia = /\d\d/; //2 digitos só que se for repetido ele conta como 1

console.log("/\d\d/");
console.log(dia.test("2020") && "2020".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("asd1"));

const palavraTresLetras = /\w\w\w/; //3 letras só que se for repetido ele conta como 1

console.log("/\w\w\w/");
console.log(palavraTresLetras.test("asd"));
console.log(palavraTresLetras.test("asdd"));
console.log(palavraTresLetras.test("as"));
console.log(palavraTresLetras.test("asdf"));



