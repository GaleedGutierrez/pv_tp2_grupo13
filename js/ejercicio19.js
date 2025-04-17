/**
 * Obtiene los datos ingresados en los campos de nombre, apellido y libreta.
 *
 * @returns {{ nombre: string, apellido: string, libreta: string }} Objeto con los datos del formulario.
 */
function obtenerDatos() {
	const nombre = document.querySelector('#nombre').value;
	const apellido = document.querySelector('#apellido').value;
	const libreta = document.querySelector('#libreta').value;

	return { nombre, apellido, libreta };
}

/**
 *  Muestra los datos ingresados en una alerta.
 * */
function mostrarDatos(datos) {
	alert(`Los datos ingresados son:
    Nombre: ${datos.nombre}
    Apellido: ${datos.apellido}
    Libreta Universitaria: ${datos.libreta}`);
}

/**
 *
 * @param {Event} event
 */
function manejarFormulario(event) {
	event.preventDefault();

	const datos = obtenerDatos();

	mostrarDatos(datos);
}

document
	.querySelector('#formulario')
	.addEventListener('submit', manejarFormulario);
