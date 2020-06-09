const validaDominio = /[?www.]\w+\.com.br/;

console.log(validaDominio.test("www.google.com.br"));
console.log(validaDominio.test("www.twitter.com.br"));
console.log(validaDominio.test("www.g1"));
console.log(validaDominio.test("g1.com.br"));
