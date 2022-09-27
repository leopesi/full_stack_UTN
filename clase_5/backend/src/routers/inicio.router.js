//Objeto ruta
const router = require('express').Router();

//Objeto controller
const controller = require('../controllers/inicio.controller')

//metodo
router.get('/inicio', controller.inicio);

module.exports = router;
