const reg = /\w+: (Henrique|Joao|Maria)/;

console.log(reg.test("Nome: Henrique"))
console.log(reg.test("Nome: Pedro"))
console.log(reg.test("Nome: Maria"))
