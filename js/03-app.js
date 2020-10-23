// document.addEventListener('DOMContentLoaded', obtenerDatos); // Cargar automáticamente...

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');

cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleados.json' 
    fetch(url)
        // .then( resultado => resultado.json()) // puede ser x..
        // .then( respuesta => mostrarHTML(respuesta)) // puede ser x..
        .then( x => x.json()) // ves..
        .then( x => mostrarHTML(x)) // ves..
}

function mostrarHTML(empleados){ // Recibe el Array
    const contenido = document.querySelector('#contenido');

    let html = '';

    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado; // Destructuring
        
        html += `
            <p>Empleado: ${nombre}</p>
            <p>ID: ${id}</p>
            <p>Trabajo: ${trabajo}</p>
            <p>Empresa: ${empresa}</p>
        `
        contenido.innerHTML = html;
    });
}










