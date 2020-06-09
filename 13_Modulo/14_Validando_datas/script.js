const validaDataNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/; 00/00/0000

console.log(validaDataNasc.test("09/06/2020"));
console.log(validaDataNasc.test("9/6/20"));
console.log(validaDataNasc.test("09-06-2020"));
