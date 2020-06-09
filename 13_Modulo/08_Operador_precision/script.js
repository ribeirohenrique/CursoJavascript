const cep = /\d{5}-\d{3}/; //valida um cep

console.log("/\\d{5}-\\d{3}/");
console.log(cep.test("12345-012"));
console.log(cep.test("endereco"));
console.log(cep.test("123-12"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/; //Valida o telefone

console.log("/(\\d{2}) \\d{5}-\\d{4}/");
console.log(tel.test("(19)99999-9999"));
console.log(tel.test("(000)99999-9999"));
console.log(tel.test("(19) 9999-9999"));
