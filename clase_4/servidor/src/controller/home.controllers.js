const controller = {} //Controller

controller.home = (req, res)=> { //function controller
    res.send('Bienvenidos al home')
    //Controller code here
}

controller.delete = (req, res)=> { //function controller
    res.send('Bienvenidos al DELETE')
    //Controller code here
}

module.exports = controller