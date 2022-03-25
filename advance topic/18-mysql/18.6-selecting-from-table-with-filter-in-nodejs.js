// 18.6 selecting from table with filter in nodejs.js
// Where Clause

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
    var sql = "SELECT * FROM customers where address = 'Lahore'";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        /** First show only result then show with loop and then show fields*/
        console.log(result);
        // console.log(fields);
        // result.forEach((item) => {
        //     console.log(`Name: ${item.name} | Address: ${item.address} | ID: ${item.id}`);
        // })
    });
});
