'use strict';
const mysql = require('mysql');
const dbConn = mysql.createConnection({
      host     : 'localhost',  
      user     : 'echeverriadev',  
      password : 'dev-pass',  
      database : 'node_mysql_crud_db'
    });
    
dbConn.connect(function(err) {
      if (err) throw err;  
      console.log("Database Connected!");
    });
    
module.exports = dbConn;