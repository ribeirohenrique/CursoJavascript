const nomeDaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(nomeDaMarca.test("Marca: Nike"))
console.log(nomeDaMarca.test("Label: Nike"))
console.log(nomeDaMarca.test("Label: Naik"))
