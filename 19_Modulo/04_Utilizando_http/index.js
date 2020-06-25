const {createServer} = require("http");

let server = createServer(function (require, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
        <h1>Hello World!</h1>
        <p>Primeira página com Node.js</p>
    `);
    response.end();
});

server.listen(8000);
console.log("ouvindo na porta 8000");
