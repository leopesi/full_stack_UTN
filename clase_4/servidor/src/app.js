/*
//ECMAScript6
import express from 'express'
*/

//ECMAScript5
const express = require('express')

//Servidor
const app = express()

//Morgan
const morgan = require('morgan')

app.use(morgan('dev'))

//Middleware
app.all('/home', (req, res, next) => {
    console.log('Mira pase por aca...')
    next();
})

//Puerto
const port = 3000

/*
//Home
app.get('/home', (req, res) => res.send('Bienvenidos al servidor este es un Home de la pagina'))

//Post
app.post('/main', (req, res) => res.send('Bienvenidos este es el MAIN del POST'))

//Put
app.put('/contact', (req, res) => res.send('Bienvenidos este es la ruta contact y estamos en PUT'))

//Delete
app.delete('/gallery', (req, res) => res.send('Bienvenidos este es el Gallery del DELETE'))
*/

app.use(require('./router/home.routers')) //Use Router

//Mostrar en la consola
app.listen(port, () => console.log(`Mira el server esta super funcionando y es del puerto ${port}!`))
