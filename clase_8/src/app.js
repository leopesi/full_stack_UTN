//Objeto
const express = require('express');
const path = require('path');
const morgan = require('morgan');

//Servidor
const app = express();

//Base de datos
require('./db/db.js')

//dotenv
require('dotenv').config();

//Port
const port = process.env.PUERTODEFAULT;

//Settings
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'hbs');
app.use(morgan('dev'));

//Ruta
app.use(require('./routes/index.routes'))

app.listen(port, () => {
    console.log(`El servidor esta respondiendo correctamente en el puerto ${port}`)
})
