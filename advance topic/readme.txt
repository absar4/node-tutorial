first create simple file of js:
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

then goto the same folder and open that folder in command line interface
now run 
    -npm init
    -inside package.json write:
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start":"node 09-advance-server"
        },