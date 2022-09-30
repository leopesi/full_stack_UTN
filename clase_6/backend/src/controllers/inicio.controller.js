//Objeto Literal
const controller = {}

//Logica
controller.inicio = (req, res)=> {
    res.render('inicio', {
        titulo: "Bueno ahora me conocen soy PUG!",
        subtitulo: "Bueno aca hay mas informacion",
        peliculas: ["peli1", "peli2", "peli3"]
    });
    console.log('Estas ubicado en la ruta inicio')
}

//Modularizar
module.exports = controller;