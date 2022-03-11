// Simple Api example
// const http = require('http');

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.write(JSON.stringify({name:'absar',email:'absar@test.com'}));
//     res.end();
// }).listen(8000);



// Data coming from module
const http = require('http');
const data = require('./Custom modules/api-data');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(8000);