const mysql = require('mysql');
const {promisify} = require('util');
 
const database = require('./keys');

console.log(database)


const pool = mysql.createPool(database);

pool.getConnection((err,connection) =>{
    if(err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('(ADMIN) LA CONEXION CON LAS BBDD FUE CERRADA');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('(ADMIN) LA BASE DE DATOS TIENE MUCHAS CONEXIONES');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('(ADMIN) LA CONEXION FUE RECHAZADA');
        }
    }

    if(connection) connection.release();
    console.log('DB is Connected');
    return;
});

// Promisify Pool Querys
pool.query = promisify(pool.query);

module.exports = pool;