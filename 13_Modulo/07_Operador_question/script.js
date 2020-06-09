const padrao = /Abacax?i/; //o X se passa por opcional

console.log(padrao.test("Abacaxi"));
console.log(padrao.test("Abacai"));

const padrao2 = /\d\w?/; //tem que ter digito e letra opcional

console.log(padrao2.test("123"));
console.log(padrao2.test("123abc"));
console.log(padrao2.test("123 "));

