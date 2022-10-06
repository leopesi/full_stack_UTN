//Objeto
const controller = {}

//funcion
controller.index=(req, res)=>{
    res.send('Bien Venidos')
    /*
    res.render('index', {
        titulo: "Bueno ahora me conocen soy HBS!",
        subtitulo: "Bueno aca hay mas informacion",
    })
    */
}

//Modularizar
module.exports = controller;