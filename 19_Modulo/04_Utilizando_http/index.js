let {readFile, writeFile} = require("fs");

readFile("arquivo.txt", "utf8", function (error, texto){
    if (error){
        throw error;
    } else {
        console.log(texto);
    }
});

writeFile("arquivo.txt", "Texto a ser escrito", function (error){
    if (error){
        throw error;
    } else {
        console.log("Escreveu com sucesso");
    }
})
