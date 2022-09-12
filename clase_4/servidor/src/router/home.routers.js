const router = require('express').Router() //Router Express

const controller = require('../controller/home.controllers') //Controller require

router.get('/', controller.home) //GetRouter
router.delete('/del', controller.delete) //DeleteRouter

module.exports = router //Export Module