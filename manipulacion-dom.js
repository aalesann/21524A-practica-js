console.log("Pasó por aquí")
const obtenerUsuarios = async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    return users;
}


obtenerUsuarios()
    .then(data => data.json())
    .then( (usuarios) => {

        // Obtener referencia del elemento a modificar (cuerpo de la tabla)
        console.log(usuarios)
        const tbody = document.getElementById("lista-usuarios");

        let listaUsuarios = '';
        usuarios.forEach( usuario => {
            listaUsuarios +=  ` 
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.address.city}</td>
                <td>${usuario.company.name}</td>
                <td>${usuario.email}</td>
                <td>${usuario.name}</td>
                <td>${usuario.phone}</td>
                <td>${usuario.username}</td>
                <td>${usuario.website}</td>
            </tr>
        ` 
        })
        tbody.innerHTML = listaUsuarios;




    })
    .catch((err) => {
        console.log("Error al consultar los datos")
        console.log(err)
    })