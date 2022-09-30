//Ruta
const routes = require('express').Router();

//Logica
const controller = require('../controllers/menu.controller');

//Metodo de peticion
routes.get('/menu', controller.menu);

//Modularizar
module.exports = routes;