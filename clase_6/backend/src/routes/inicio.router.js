//Ruta
const routes = require('express').Router();

//Logica
const controller = require('../controllers/inicio.controller');

//Metodo de peticion
routes.get('/inicio', controller.inicio);

//Modularizar
module.exports = routes;