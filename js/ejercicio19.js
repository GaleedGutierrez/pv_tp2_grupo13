export function obtenerDatos() {
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const libreta = document.querySelector('#libreta').value;

    return { nombre, apellido, libreta };
}

export function mostrarDatos(datos) {
    alert(`Los datos ingresados son:
    Nombre: ${datos.nombre}
    Apellido: ${datos.apellido}
    Libreta Universitaria: ${datos.libreta}`);
}

export function manejarFormulario(event) {
    event.preventDefault(); 
    const datos = obtenerDatos();
    mostrarDatos(datos);
}
document.querySelector('#formulario').addEventListener('submit', manejarFormulario);
