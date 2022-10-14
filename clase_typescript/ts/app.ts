const saludo:string = 'Buenos Dias'
console.log(saludo)

//Variables: => :string :number :boolean :any, :string[], :number[], boolena[], any[]  
	
const ejemplo: string = "esto es un string"
const numer: number = 16
const tipoB: boolean = true
const ambos: any = "distintos tipos de datos" 

//Arrays[]: => Arreglos

const textString: string[] = ["string", "string2","string3"];
const numero: number[] = [1, 2, 3];
const tipoB2: boolean[] = [true, false, true];
const varios: any[] = ["string", 16 , true];



//void, undefined, null = tipos de datos comunes
 
const myVoid:void = undefined;
const myNull:null = null;
const myUndefined:undefined = undefined;

//function 

function getSum(num1:number, num2:number, num3:number) {
    const res = num1 + num2 + num3
    return console.log(res); 
}

getSum(4,7,7)

	// funcion example 2 

function fullName(firstName:string, lastName?:string) {
    if (lastName === undefined) {
        console.log(firstName)
    }else{
        console.log(firstName + lastName)
    }
}

fullName("leonardo" + ' ' + 'Pereira')

//Clase
class Objeto {
    nombre: String;
    apellido: String;
    edad: any;

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    registro() {
        console.log(`su nombre es ${this.nombre} su apellido es ${this.apellido} y su edad es ${this.edad}` )
    }
}

const usuario1 = new Objeto('Leonardo', 'Pereira', '38')

usuario1.registro()