// Express Js Tutorial Rendering or displaying html tags and json
const express = require('express');
const app = express(); //Intializing express functions 

app.get('',(req,res)=>{
    res.send("<h1>Welcome, Hello this is main page</h1>")
});

app.get('/about',(req,res)=>{
    res.send(`
    <input type="text" placeholder="Enter Your Name">
    <button>Click Me</button>
    `);
});

app.get('/json',(req,res)=>{
    res.send([
        {
            name:'the quick code',
            email:'coding@test.com'
        },
        {
            name:'sam',
            email:'sam@test.com'
        },
        {
            name:'rafeh',
            email:'rafeh@test.com'
        },
    ]);
});

app.listen(8080,(err)=>{
    if (!err) {
        console.log(`Server is Running at http://localhost:8080`);
    }
});

