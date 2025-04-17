const edades = [18, 22, 25, 35, 19, 27, 33, 21];
/**
 * @param {[number]} array - Array de edades
 * @returns {number} - Promedio de las edades
 */
const calcularPromedio = (array) => {
	let suma = 0;

	array.forEach((edad) => {
		suma += edad;
	});

	return suma / array.length;
};

const promedio = calcularPromedio(edades);

console.info(`El promedio de las edades es: ${promedio}`);
