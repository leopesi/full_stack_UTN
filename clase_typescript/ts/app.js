var saludo = 'Buenos Dias';
console.log(saludo);
//Variables: => :string :number :boolean :any, :string[], :number[], boolena[], any[]  
var ejemplo = "esto es un string";
var numer = 16;
var tipoB = true;
var ambos = "distintos tipos de datos";
//Arrays[]: => Arreglos
var textString = ["string", "string2", "string3"];
var numero = [1, 2, 3];
var tipoB2 = [true, false, true];
var varios = ["string", 16, true];
//void, undefined, null = tipos de datos comunes
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
//function 
function getSum(num1, num2, num3) {
    var res = num1 + num2 + num3;
    return console.log(res);
}
getSum(4, 7, 7);
// funcion example 2 
function fullName(firstName, lastName) {
    if (lastName === undefined) {
        console.log(firstName);
    }
    else {
        console.log(firstName + lastName);
    }
}
fullName("leonardo" + ' ' + 'Pereira');
//Clase
var Objeto = /** @class */ (function () {
    function Objeto(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Objeto.prototype.registro = function () {
        console.log("su nombre es ".concat(this.nombre, " su apellido es ").concat(this.apellido, " y su edad es ").concat(this.edad));
    };
    return Objeto;
}());
var usuario1 = new Objeto('Leonardo', 'Pereira', '38');
usuario1.registro();
