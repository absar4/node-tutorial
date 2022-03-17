// Express Js Tutorial 
// Node js web framework
// npm express [search it on google]
// require express 
const express = require('express');
const app = express(); //Intializing express functions 

app.get('',(req,res)=>{
    res.send("Hello this is index page")
});

app.get('/about',(req,res)=>{
    res.send("Hello this is about page")
});

app.listen(8080,(err)=>{
    if (!err) {
        console.log(`Server is Running at http://localhost:8080`);
    }
});

