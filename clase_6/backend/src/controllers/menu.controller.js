//Objeto Literal
const controller = {}

//Logica
controller.menu = (req, res)=> {
    res.send('Bienvenidos al menu');
    console.log('Estas ubicado en la ruta menu')
}

//Modularizar
module.exports = controller;