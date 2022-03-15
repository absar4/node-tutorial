// 👀⏩ readFile = Opens a file in browser
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//     fs.readFile('./fs-files/hi.html', function (err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8000);




// 👀⏩ create a file named readme.txt:
// var fs = require('fs');
// fs.appendFile('./fs-files/readme.txt', 'Node is easy to learn!!!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });




// 👀⏩ Create a new, empty file using the open() method:
// var fs = require('fs');
// fs.open('./fs-files/readme.txt', 'w (is a flag writing)', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!'+ file);
// });




/**
 * 👀⏩ Create a new file using the writeFile() method:
 *  The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created: 
 */
//  var fs = require('fs');
//  fs.writeFile('./fs-files/file1.html', '<h1>Hello contentas112</h1>', function (err) {
//    if (err) throw err;
//    console.log('Saved!');
//  });




// 👀⏩ The fs.unlink() method deletes the specified file:
// var fs = require('fs');
// fs.unlink('./fs-files/file1.html', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });




// 👀⏩ The fs.rename() method renames the specified file:
// var fs = require('fs');
// fs.rename('./fs-files/myrenamedfile.html', './fs-files/web.html', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });


//👀⏩ copyFileSync() will take 2 arguments first is the file you want to copy and second is the file where you want to paste the data
const fs = require('fs');
fs.copyFileSync('./fs-files/hi.html', './fs-files/newhi.html');
