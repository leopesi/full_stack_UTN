/*
const n1 = 20
const n2 = 315

sum = n1 + n2

console.log(sum)

import express  from "express" //ECMAScript 6

const express = require('express')
app.get('/', (req, res) => res.send('Hello World!'))

*/
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.port || 3000


app.use(morgan('dev'))

app.get('/', (req, res) => res.json({
    username: "Joanna",
    lastname: "Messias"
})
)

app.all('/post', (req, res, next)=> {
    console.log('Vos pasaste por aca...');
    next();
})



app.post('/post', function (req, res) {
  res.send('bienvenidos al servidor POST')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))