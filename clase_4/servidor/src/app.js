/*
//ECMAScript6
import express from 'express'
*/

//ECMAScript5
const express = require('express')

//Servidor
const app = express()

//Puerto
const port = 3000

app.get('/', (req, res) => res.send('Bienvenidos'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
