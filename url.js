//👀⏩ It holds the part of the url that comes after the domain name
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('url is = ' + req.url);
    res.end(txt);
}).listen(8000);

//👀⏩ There are built-in modules to easily split the query string into readable parts, such as the URL module. 
var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var qry = url.parse(req.url, true).query;
    var txt = qry.year + " " + qry.month;
    res.write('url is = ' + req.url);
    res.end(txt);
}).listen(8000)