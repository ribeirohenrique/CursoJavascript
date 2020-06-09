const notAB = /[^ab]/; //Não ter A e B

console.log(notAB.test("a"));
console.log(notAB.test("Aqui tem a"));

const notAateZ = /[^a-z]/; //Não ter de A a Z

console.log(notAateZ.test("123 as"));
console.log(notAateZ.test("Paralelepipedo"));
