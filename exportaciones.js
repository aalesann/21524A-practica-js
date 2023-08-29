export const suma = (num1, num2) => num1 + num2;

export const resta = (num1, num2) => num1 - num2;

export const multiplicacion = (num1, num2) => num1 * num2;

export const division = (num1, num2) => num1 / num2;

export const calculo = function (num1, num2, operacion) {
    switch (operacion) {
        case "+":
            console.log(suma(num1, num2))
            break;
        case "-":
            console.log(resta(num1, num2))
            break;
        case "/":
            console.log(division(num1, num2))
            break;
        case "*":
            console.log(multiplicacion(num1, num2))
            break;
    }
}

export const interes = 500;