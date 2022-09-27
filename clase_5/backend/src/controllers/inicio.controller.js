const controller = {}

controller.inicio = (req, res) => {
    res.send('Este el inicio');
    console.log('Este es el servidor de início')
}

module.exports = controller;