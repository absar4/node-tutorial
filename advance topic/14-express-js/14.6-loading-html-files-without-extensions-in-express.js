// Express Js Tutorial Getting Data from parameter through links
const express = require('express');
const path = require('path');
const app = express(); //Intializing express functions 

const publicPath = path.join(__dirname,'public');

app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`);
});

app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/404.html`);
});
app.listen(8080,(err)=>{
    if (!err) {
        console.log(`Server is Running at http://localhost:8080`);
    }
});

