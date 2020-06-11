const testeID = /\d+ID\b/;

console.log(testeID.test("ID do pedido 32131"));
console.log(testeID.test("Você tem um ID"));
console.log(testeID.test("Você tem um ID"));
console.log(testeID.test("22354"));
console.log(testeID.test("asdfID"));
console.log(testeID.test("123ID"));
