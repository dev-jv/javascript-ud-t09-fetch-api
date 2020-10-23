const cargarJSONBtn = document.querySelector('#cargarJSON')

cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleado.json';
    fetch(url)
        // .then( respuesta => {
        //     console.log(respuesta);
        // })

        // .then( respuesta => {
        //     return respuesta.json();
        // })
        // .then( resultado => {
        //     console.log(resultado);
        // })

        // .then( respuesta => respuesta.json())
        // .then( resultado => console.log(resultado)) // Ya es un obj

        .then( respuesta => respuesta.json())
        .then( resultado => mostrarHTML(resultado)) // También Scripting..
}

function mostrarHTML({empresa, id, nombre, trabajo}) { // Destructuring

    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `
}

