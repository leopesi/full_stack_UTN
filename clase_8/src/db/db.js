const mysql = require('mysql2');
require('dotenv').config()

const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
})

//Function
conexion.connect(function(err){
    if(err) {
        throw err;}
        else {
            console.log('conexion exitosa')
        }
    })

    module.exports = conexion;