function checarNumero(num){
    let number = Number(num);
    if (Number.isNaN(number)){
        alert("Somente números neste campo")
    } else {
        return number;
    }
}

checarNumero(5);
checarNumero("cinco");

let number = prompt("Digitre um Número");
checarNumero(number);
