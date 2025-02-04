const mysql = require('mysql2');

const pool = mysql.createPool(
    {
        host : 'localhost' , 
        user : 'root' , 
        database : 'store',
        password : 'Hellomysql2',
        port : 3305
    }
);

module.exports = pool.promise();