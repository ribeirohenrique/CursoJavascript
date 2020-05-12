let pessoa = {
    nome: "Henrique",
    idade: 21,
    profissao: "Desenvolvedor"
}

console.log(pessoa.nome);
delete pessoa.nome;
console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;
console.log(pessoa.casado);