// set up mysql connection.
var mysql = require("mysql");

var connection;
if(process.env.JAWSD_URL){
    connection=mysql.createConnection(process.env.JAWSD_URL)
}
else{


var connection= mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Fatimatou96",
    database: "burger_db"
});
}
// Make connection.
connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);

});

module.exports = connection;