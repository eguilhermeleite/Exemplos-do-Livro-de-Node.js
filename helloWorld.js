const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("Hello World!");
});

server.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}. Pressione ctrl + c para terminar...`);
});