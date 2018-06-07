const mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "burger_db"
});

connection.connect( (err) => {
  if(err) {
    console.error(`error connection: ${err.stack}`);
  }
  console.log(`connect as id ${connection.threadId}` );
});

module.exports = connection;
