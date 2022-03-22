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
module.exports.reqFilter = reqFilter;