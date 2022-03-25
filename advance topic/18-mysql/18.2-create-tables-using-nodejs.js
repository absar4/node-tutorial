// 18.2-create-tables-using-nodejs
// var mysql = require('mysql');
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "mydb1"
// });

// con.connect(function (err) {
//     if (err) throw err;

//     console.log("Connected! to Server");
//     let sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//     });

// });



// Primary Key 
// var mysql = require('mysql');
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "mydb1"
// });

// con.connect(function (err) {
//     if (err) throw err;

//     console.log("Connected! to Server");
//     let sql = "CREATE TABLE customers_with_id (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";

//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//     });

// });

/**
 If the table already exists, use the ALTER TABLE keyword:
 
 Example
 Create primary key on an existing table:
 
 */
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});