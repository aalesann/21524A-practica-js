// ! CALLBACKS

const mostrarBienvenida = nombre => {
    return "Bienvenid@ al servidor " + nombre
}

function mostrarMensaje(nombre, apellido) {
    return `Bienvenid@ ${nombre} ${apellido}`
}

// Función de orden superior
const saludar = function (datos, fnMostrarMensaje) {
    const { nombre, apellido } = datos
    console.log(fnMostrarMensaje(nombre, apellido))
}
const user = { nombre: "John", apellido: "Wick" }
// saludar(user, mostrarMensaje);
// saludar(user, mostrarBienvenida);


// ! PROMESAS
// const obtenerUsuarios = () => {
//     const usuarios = new Promise(function (resolve, reject) {
//         if (true === true) {
//             resolve({ username: "alesan", rol: "admin" })
//             return
//         } else {
//             reject('Error en la consulta')
//         }
//     })

//     return usuarios
// }

// obtenerUsuarios()
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
        
// ! CONSULTAS A UNA API
// const obtenerUsuarios = async () => {
//     const users = await fetch("https://jsonplaceholder.typicode.com/todos")
//     return users;
// }
// obtenerUsuarios()
//     .then(data => data.json())
//     .then( (usuarios) => console.log(usuarios))
//     .catch(console.log("Error al consultar los datos"))
        





