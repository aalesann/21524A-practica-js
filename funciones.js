// Funciones Declarativas

// Implementación de la función
// function saludar() {
//     console.log('Bievenid@ a mi sitio web')
// }
// Invocación
// saludar()

// function saludar(nombre) {
//     console.log('Bievenid@ a mi sitio web ' + nombre);
// }
// Invocación
// saludar("John")

// function suma(num1, num2) {
//     let resultado = num1 + num2;
//     console.log(resultado)
// }
// Invocación
// suma(2, 6)

// function calculo(num1, num2, operacion) {
//     let resultado;
//     switch (operacion) {
//         case "+":
//             resultado = num1 + num2;
//             console.log(resultado)
//             break;
//         case "-":
//             resultado = num1 - num2;
//             console.log(resultado)
//             break;
//         case "/":
//             resultado = num1 / num2;
//             console.log(resultado)
//             break;
//         case "*":
//             resultado = num1 * num2;
//             console.log(resultado)
//             break;
//     }
// }
// // Invocación
// calculo(6, 2, "*")
import { suma, calculo, interes } from './exportaciones.js'

// !IMPORTACIÓN DE FUNCIONES
// Invocación
calculo(10, 2, "+")


const importe = 4000;
const importeTotal = suma(interes, importe )
console.log({importeTotal})
let par = "2"
console.log([+par])
console.log(par)


