const express = require('express');
const app = express();
const middleware = require('./middleware');

app.get('', middleware.reqFilter, (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About Page');
});


app.listen(8000,(err)=>{
    if(!err){
    console.log(`Example app listening at http://localhost:8000`);
    }
});
var server = app.listen(8888, function(){
    var host = server.address().address;
    var port = server.address().port;
});