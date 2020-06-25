const express = require('express');
const app = express();
const port = 3000;
const db = require('./db/connection');
const bodyParser = require('body-parser');
app.listen(port, function (){
    console.log("O express está rodando na porta: " +port);
});

//Body parser
app.use(bodyParser.urlencoded({extended: false}));

//Conexão ao db MySQL
db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco de dados MySQL");
    })
    .catch(error => {
        console.log("Ocorreu um erro ao conectar ao banco MySQL", err)
    });

//Routes
app.get('/', function (req, res){
    res.send("Está funcionando");
});

//Jobs routes
app.use('/jobs', require('./routes/jobs'))
