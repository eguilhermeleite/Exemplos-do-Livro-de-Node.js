const http = require("http");
const port = process.env.PORT || 3000;


const server = http.createServer((req, res) => {
  // remover queryString e barra final com conteúdo lowerCase
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch(path){
      case '':
          res.writeHead(200,{"Content-type": "text/html"});
          res.end("Homepage");
      break;

      case '/about':
          res.writeHead(200,{"Content-type": "text/html"});
          res.end("About");
      break;

      default:
        res.writeHead(404,{"Content-type": "text/html"});
        res.end("Not Found");
    break;
    
  }
});

server.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}. Pressione ctrl + c para terminar...`);
});