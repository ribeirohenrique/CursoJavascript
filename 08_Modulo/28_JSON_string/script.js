let pessoa = {
    "nome": "Henrique",
    "idade": 21,
    "cidade": "Hortolandia",
    "pais": "BR",
    "hobbies": ["PC", "Bicicleta", "Correr", "Nadar"]
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);
console.log(pessoa.pais);
console.log(pessoa.hobbies);

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto)
console.log(pessoaJSON);
console.log(pessoaJSON.hobbies[0]);