//objeto
const express = require('express')
const morgan = require('morgan')
const path = require('path')

//server
const app = express()

//port
const port = process.env.port || 3000

//Setting
app.set('views', path.join(__dirname, 'views'));  //views
app.set('view engine', 'pug')
app.set(express.static('public'));  //Staticfile
app.set(express.json());  //json


//MiddleWare
app.all('/inicio', (req, res, next) => {
    console.log('Estas pasando por la ruta de inicio')
    next();
})

app.use(morgan('dev'))

//Ruta
app.get('/', (req, res) => {
    res.send('Servidor Estático')
})

//ruta de controlador
app.use(require('./routers/inicio.router'))  

app.get('/pug', (req, res) => {
    res.render('index', {
        title: 'Hola',
        message: 'Template Pug',
        message2: 'Messaje 2',
        message3: 'Messaje 3'
    })
})

//listen
app.listen(port, console.log(`El servidor se encuentra activo en el puerto ${port}`))

