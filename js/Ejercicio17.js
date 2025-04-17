/**
 * @description Esta función cuenta la cantidad de letras 'a' en un texto.
 * @param {string} texto Texto en el que se contarán las letras 'a'.
 * @returns {number} Cantidad de letras 'a' en el texto.
 */
const contarLetraA = (texto) => {
	let count = 0;

	for (const letra of texto) {
		if (letra === 'a') {
			count++;
		}
	}

	return count;
};

console.info(contarLetraA('Manzana'));
console.info(contarLetraA('hola mundo'));