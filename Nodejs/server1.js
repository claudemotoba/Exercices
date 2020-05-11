const http=require("http");

const PORT=3000;

const server=http.createServer(function(request,response){
    if (request.url==="/") {
        response.writeHead(200);
        response.end('La page Accueil');
    }else if(request.url==="/dieudonnee"){
        response.writeHead(200);
        response.end('La page Dieudonnee Miyalu');
    }
    else if(request.url==="/josephkabemba"){
        response.writeHead(200);
        response.end('La page Joseph Kabemba');
    }else{
        response.writeHead(404);
        response.end("Paga non trouvée");
    }
    
});

server.listen(PORT);