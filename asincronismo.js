// ! CALLBACKS

const mostrarBienvenida = (nombre) => {
    return "Bienvenid@ al servidor " + nombre
}

function mostrarMensaje(nombre, apellido) {
    return `Bienvenid@ ${nombre} ${apellido}`
}

// Función de orden superior
const saludar = function(datos, fnMostrarMensaje){
    const { nombre, apellido } = datos
    console.log(fnMostrarMensaje(nombre, apellido))
}

const user = { nombre: "John", apellido: "Wick" }

saludar(user, mostrarMensaje);
saludar(user, mostrarBienvenida);


// ! PROMESAS
