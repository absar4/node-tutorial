// 18.1-database-connection-and-create-db-using-nodejs
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
});

con.connect(function (err) {
    if (err) throw err;
    
        con.query("CREATE DATABASE mydb1", function(err, result) {
            if (err) throw err;
            console.log("Database created");
        })
        console.log("Connected! to Server");
    
});
