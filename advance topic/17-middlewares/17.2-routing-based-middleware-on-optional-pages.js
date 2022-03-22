const express = require("express");
const app = express();

const reqFilter = (req,res,next) =>{
    if(!req.query.age){
        res.send('Please Enter Your Age')
    }else if(req.query.age < 18){
        res.send('You are not eligible to access this site')
    }
    else{
        next();
    }
} 



app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.get('/about',reqFilter,(req,res)=>{
    res.send('Hello About Page');
});


app.listen(8000,(err)=>{
    if (!err) {
        console.log(`Server is running on http://localhost:8000`);
    }
})

