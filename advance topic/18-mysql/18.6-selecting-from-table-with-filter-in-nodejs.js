// 18.6 selecting from table with filter in nodejs.js
// Where Clause

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb1"
});

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "SELECT * FROM customers where address = 'Lahore'";
//     con.query(sql, function (err, result, fields) {
//         if (err) throw err;
//         /** First show only result then show with loop and then show fields*/
//         console.log(result);
//         // console.log(fields);
//         // result.forEach((item) => {
//         //     console.log(`Name: ${item.name} | Address: ${item.address} | ID: ${item.id}`);
//         // })
//     });
// });

// Wildcards
// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "SELECT * FROM customers WHERE address LIKE 'S%'";
//     con.query(sql, function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });


// if you want to pass it in the same line 
// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var addr = "lahore"
//     var sql = `SELECT * FROM customers WHERE address = ${mysql.escape(addr)}`;
//     con.query(sql, function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });


// with conditions
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var addr = "lahore"
    var sql = `SELECT * FROM customers WHERE address = 'Lahore' OR name = 'Amy'`;
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});