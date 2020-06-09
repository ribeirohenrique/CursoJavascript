const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test("henrique@gmail.com"));
console.log(validaEmail.test("henrique@gmail"));
console.log(validaEmail.test("gmail.com"));
console.log(validaEmail.test("gmail.com.br"));
