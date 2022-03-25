// 18.5-selecting-from-table-and-displaying-data-nodejs.js

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb1"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM customers";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        /** First show only result then show with loop */
        // console.log(result);
        result.forEach((item) => {
            console.log(`Name: ${item.name} | Address: ${item.address} | ID: ${item.id}`);
        })
    });
});
