var connection = require("../config/connection.js");

function printQmarks(num) {
  var a = [];

  for(var i=0; i<num; i++){
    a.push("?");
  }
  return a.toString();
}

function objTSql(o){
  var a = [];
  for (var key in o){
    var val = o[key];

    if(Object.hasOwnProperty.call(o,key)){
      if(typeof val === 'string' && val.indexOf(" ") >= 0) {
        val = "'" + val + "'";
      }
      a.push(key + "=" + val);
    }
  }
  return a.toString();
}

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " +tableInput + ";";
    connection.query(queryString, (err,result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table,cols,vals,cb){
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQmarks(vals.length);
    queryString += ")";

    console.log(queryString);
    connection.query(queryString, (err,result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
},
update: function(table, objColVals, condition, cb) {

}
