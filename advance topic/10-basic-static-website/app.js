const fs = require('fs');
const http = require('http');
const path = require('path');

const hostname = 'localhost';
const port = 8080;
const server_name = http.createServer((req, res) => {
    console.log(res.header);
    if (req.method == 'GET') {
        let fileUrl;
        if (req.url == '/') {
            fileUrl = '/about.html';
        }else if (req.url == '/contact') {
            fileUrl = '/contact.html';
        }
        else if (req.url == '/about') {
            fileUrl = '/about.html';
        }
        
        else {
            fileUrl = req.url;
        }
        let filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
        if (fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(`Error Page Not Found : ${fileUrl}`);
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                fs.createReadStream(filePath).pipe(res);

            })
        } else {

            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`Error Page Not Found : ${fileUrl} is not an html page`);
        }
    } else {

        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`Error Page Not Found : ${fileUrl} file not supported`)
    }
});
server_name.listen(port, hostname, () => {
    console.log(`Server is Running on http://${hostname}:${port}`);
});

