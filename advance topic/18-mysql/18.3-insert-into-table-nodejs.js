// 18.3-insert-into-table-nodejs.js
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
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Lahore')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Data INSERTED");
  });
});