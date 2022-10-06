//Ruta
const routes = require('express').Router();

//Logica
const controller = require('../controllers/index.controllers');

//Metodo de peticion
routes.get('/index', controller.index);

//Modularizar
module.exports = routes;