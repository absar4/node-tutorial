// Express Js Tutorial Getting Data from parameter through links
const express = require('express');
const path = require('path');
const app = express(); //Intializing express functions 

const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));

app.listen(8080,(err)=>{
    if (!err) {
        console.log(`Server is Running at http://localhost:8080`);
    }
});

