// ! Objetos Literales

// let persona = {
//     nombre: "John",
//     apellido: "Wick",
//     "edad-persona": 50,
//     pais: "EEUU",
//     domicilio: { //Objeto anidado
//         calle: "Calle 123",
//         cp: "123",
//         numero: "123123"
//     },
//     telefono: ["31231231", "234234234"],
//     correr: function(kms = 0) {
//         return `Estoy corriendo ${kms}kms`
//     }
// }

// console.log(persona)

// // Acceso a los datos
// console.log(persona.nombre)
// console.log(persona.domicilio)
// console.log(persona.domicilio.calle)
// console.log(persona.telefono[1])
// console.log(persona["edad-persona"])

// console.log(persona.correr(10))
// console.log(persona.correr())

// ! DESTRUCTURACIÓN
// console.log(persona.nombre, persona.apellido, persona.domicilio.calle)


const personas = [
    {
        nombre: "John",
        apellido: "Wick",
        "edad-persona": 50,
        pais: "EEUU",
        domicilio: { //Objeto anidado
            calle: "Calle 123",
            cp: "123",
            numero: "123123"
        },
        telefono: ["31231231", "234234234"],
        correr: function(kms = 0) {
            return `Estoy corriendo ${kms}kms`
        }
    },
    {
        nombre: "John",
        apellido: "Doe",
        "edad-persona": 50,
        pais: "EEUU",
        domicilio: { //Objeto anidado
            calle: "Calle 123",
            cp: "123",
            numero: "123123"
        },
        telefono: ["31231231", "234234234"],
        correr: function(kms = 0) {
            return `Estoy corriendo ${kms}kms`
        }
    },{
        nombre: "John",
        apellido: "Stevenson",
        "edad-persona": 50,
        pais: "EEUU",
        domicilio: { //Objeto anidado
            calle: "Calle 123",
            cp: "123",
            numero: "123123"
        },
        telefono: ["31231231", "234234234"],
        correr: function(kms = 0) {
            return `Estoy corriendo ${kms}kms`
        }
    }
]

// ? PROTOTIPOS EN JAVASCRIPT
Object.prototype.correr = function(kms = 0) {
    return `Estoy corriendo ${kms}kms`
}

Object.prototype.saludo =  () => {
    console.log('Hola Mundo')
}

// ! COPIA DE SUPERFICIAL Y COPIA PROFUNDA DE OBJETOS
const persona = { // ABC123
    nombre: "John",
    apellido: "Wick",
    "edad-persona": 50,
    pais: "EEUU",
    domicilio: { //Objeto anidado
        calle: "Edificio Principal",
        cp: "123",
        numero: "123123"
    },
    telefono: ["31231231", 234234234],
    correr: function(kms = 0) {
        return `Estoy corriendo ${kms}kms`
    },
    saludo: () => {
        console.log('Hola Mundo')
    }
}

let numero1 = 10;
let numero2 = numero1;
console.log(numero1)
numero2 = 11
console.log(numero2)

// ! EL PROBLEMA
// const johnDoe = persona;  // ABC124

// ? Solución 1
// const johnDoe = Object.assign({}, persona);

// ? Solución 2
const johnDoe = JSON.parse(JSON.stringify(persona))  // ABC124
johnDoe.nombre = "NOMBRE MODIFICADO";
johnDoe.apellido = "APELLIDO MODIFICADO";
johnDoe.domicilio.pais = "Argentina";

console.log(persona);
console.log(johnDoe);


// ! ARREGLOS
// let lista = new Array();
// let lista = [1,2,3,4,5,6,7,8,9];
// let listaDos = ["Jhon", "Wick", 50, true, ["21234", "55555"], { nombre: "Jhon", apellido: "Wick"}]


// console.log(lista)
// console.log(listaDos)
// console.log(listaDos[5].nombre)
// console.log(listaDos[4][1])


// console.log(personas[0].nombre, personas[0].apellido)


// ! DESESTRUCTURACIÓN DE ARREGLOS

// TODO: Terminar de explicar tal cosa
// const [, apellido , , , , data] = listaDos;

// const { nombre } = data;

// console.log(apellido, nombre)