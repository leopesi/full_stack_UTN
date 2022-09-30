//Objeto
const express = require('express');
const morgan = require('morgan');
const path = require('path');

//Servidor
const app = express();

//Port
const port = 3000;

//Settings
app.use(morgan('dev'));
app.set('views', path.join(__dirname, 'views')); 
app.set(express.static('public'));
app.set(express.json());
app.set('view engine','pug')


//Routes
app.get('/', (req, res) => res.send('Bienvenidos a la ruta por defecto'));

//inicio
app.use(require(`./src/routes/inicio.router`));
//menu
app.use(require(`./src/routes/menu.router`));

//Listen de consola
app.listen(port, ()=> 
console.log(`El servidor esta respondiendo correctamente en el puerto ${port} y este es el diretorio: ${__dirname}`),
);
