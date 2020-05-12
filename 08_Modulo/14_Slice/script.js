let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(nums.slice(4,5)); //parametro é x, y -1 então ele pega só o 4
console.log(nums.slice(4,6)); //aqui ele pega o 4 e 5
console.log(nums.slice(2)); //aqui ele inicia no 2 e vai até o final

console.log(nums.slice(-2)); //pega o penúltimo indice
console.log(nums.slice(3,-2)); //pega o terceiro indice e exclui penúltimo indice