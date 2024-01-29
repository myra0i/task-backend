const Pool = require('pg').Pool
require('dotenv').config()
 
const pool = new Pool({
    user: 'postgres',
    password: '0710682121',
    host: process.env.HOST,
    port: process.env.DBPORT,  
    database:'postgres' ,
    sslmode:require
})


module.exports = pool 