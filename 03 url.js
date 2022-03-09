//👀⏩ It holds the part of the url that comes after the domain name
// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('url is = ' + req.url);
//     res.end(txt);
// }).listen(8000);

//👀⏩ There are built-in modules to easily split the query string into readable parts, such as the URL module.
// var http = require('http');
// var url = require('url');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     var qry = url.parse(req.url, true).query;
//     var txt = qry.year + " " + qry.month;
//     res.write('url is = ' + req.url);
//     res.end(txt);
// }).listen(8000);

//👀⏩ url.parse() method will divide it into pieces and return a URL object with each part of the address as properties
// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2022&month=february';
//----Parse the address:
// var q = url.parse(adr, true);

//----The parse method returns an object containing url properties
// console.log(q.host); // localhost:8080
// console.log(q.pathname); // /default.htm
// console.log(q.search); // ?year=2022&month=february

//----The query property returns an object with all the querystring parameters as properties:
// var qdata = q.query; // stores an object ==> { year: '2022', month: 'february' }
// console.log(qdata.month); // february
// console.log(qdata.year); // 2022
// console.log(qdata); // { year: '2022', month: 'february' }
// console.log(q.query.month); // february
