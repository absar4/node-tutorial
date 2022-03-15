const http = require('http');
const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req,res)=>{
    console.log(req.headers);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Connection Success 1</h1>');
});
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
});