/**
 * To insert more than one record, 
 * make an array containing the values, 
 * and insert a question mark in the sql, which will be replaced by the value array
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
   var sql = "INSERT INTO customers (name, address) VALUES ?";
   var values = [
     ['John', 'Highway 71'],
     ['Peter', 'Lowstreet 4'],
     ['Amy', 'Apple st 652'],
     ['Hannah', 'Mountain 21'],
     ['Michael', 'Valley 345'],
     ['Sandy', 'Ocean blvd 2'],
     ['Betty', 'Green Grass 1'],
     ['Richard', 'Sky st 331'],
     ['Susan', 'One way 98'],
     ['Vicky', 'Yellow Garden 2'],
     ['Ben', 'Park Lane 38'],
     ['William', 'Central st 954'],
     ['Chuck', 'Main Road 989'],
     ['Viola', 'Sideway 1633']
   ];
   con.query(sql, [values], function (err, result) {
     if (err) throw err;
     console.log("Number of records inserted: " + result.affectedRows);
   });
 });




// 18.3-insert-into-table-nodejs.js
// var mysql = require('mysql');
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "mydb1"
// });
/*
 result.insertId ==> is used for displaying the current id for the row or in other words you can get
 the id of the row you just inserted
    Note: To be able to get the inserted id, only one row can be inserted.
**/
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (name, address) VALUES ('Pakistan', 'Lahore')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Data INSERTED with id no " + result.insertId);
//   });
// });


