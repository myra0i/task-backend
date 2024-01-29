const Pool = require('pg').Pool
require('dotenv').config()
 
const pool = new Pool({
    user: 'database_4umt_user',
    password: 'TS5QUY1WOAsAFmKfe1p0VcVPfmvAC6w7',
    host: process.env.HOST,
    port: process.env.DBPORT,  
    database:'database_4umt' ,
    ssl:{
        rejectUnauthorized: false, 
      }
},

)


module.exports = pool 