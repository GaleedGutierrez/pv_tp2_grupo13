/**
 * @description Esta función suma todos los números enteros desde numberInicial hasta numberFinal.
 * @param {number} numberInicial
 * @param {number} numberFinal
 * @returns {number | undefined} Suma de los números en el rango [numberInicial, numberFinal].
 */
const sumarRango = (numberInicial, numberFinal) => {
	if (numberInicial > numberFinal) {
		console.error(
			'Error el numero inicial debe ser menor o igual al final',
		);

		return;
	}

	let suma = 0;

	for (let index = numberInicial; index <= numberFinal; index++) {
		suma += index;
	}

	return suma;
};

console.info(sumarRango(4, 10)); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
