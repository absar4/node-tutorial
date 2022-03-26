
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb1"
});

// con.connect(function (err) {
//     if (err) throw err;
//     var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Number of records deleted: " + result.affectedRows);
//     });
// });


// con.connect(function (err) {
//     if (err) throw err;
//     var sql = "DELETE FROM customers WHERE address = ?";
//     con.query(sql, 'Apple st 652', function (err, result) {
//         if (err) throw err;
//         console.log("Number of records deleted: " + result.affectedRows);
//     });
// });

con.connect(function (err) {
    if (err) throw err;
    var sql = "DELETE FROM customers WHERE address = ? or address = ?";
    con.query(sql, ['Sideway 1633', 'One way 98'], function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
});

