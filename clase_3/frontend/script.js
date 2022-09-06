/*
function Persona (nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.view = function () {
        console.log(`El usuário se lhama ${this.nombre} ${this.apellido} y su edade ${this.edad}`);
    }
}
const user_1 = new Persona ("Leonardo", "Silva", 38)
*/

class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.view = ()=> {
            console.log(`El usuário se lhama ${this.nombre} ${this.apellido} y su edade es ${this.edad}`);
        }

    }
}

const user_1 = new Persona ("Leonardo", "Silva", 38)

user_1.view()
