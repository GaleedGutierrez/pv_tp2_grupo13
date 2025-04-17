/**
 * @typedef {keyof typeof COUNTRIES_AND_CAPITALS} Country
 */
/**
 * @typedef {keyof typeof CAPITALS_AND_COUNTRIES} Capital
 */

/**
 * @type {HTMLSelectElement | null}
 */
const SELECT_COUNTRIES = document.querySelector('#countries');
/**
 * @type {HTMLSelectElement | null}
 */
const SELECT_CAPITALS = document.querySelector('#capitals');
// eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
const CAPITALS_AND_COUNTRIES = {
	'Buenos Aires': 'Argentina',
	Brasilia: 'Brasil',
	Bogotá: 'Colombia',
	Santiago: 'Chile',
	Asunción: 'Paraguay',
	Montevideo: 'Uruguay',
};

const COUNTRIES_AND_CAPITALS = {
	Argentina: 'Buenos Aires',
	Brasil: 'Brasilia',
	Colombia: 'Bogotá',
	Chile: 'Santiago',
	Paraguay: 'Asunción',
	Uruguay: 'Montevideo',
};
/**
 * @typedef {keyof typeof COUNTRIES_AND_CAPITALS} Country
 */
/**
 * @typedef {keyof typeof CAPITALS_AND_COUNTRIES} Capital
 */

/**
 * @type {HTMLSelectElement | null}
 */
const SELECT_COUNTRIES = document.querySelector('#countries');
/**
 * @type {HTMLSelectElement | null}
 */
const SELECT_CAPITALS = document.querySelector('#capitals');

// eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
const CAPITALS_AND_COUNTRIES = {
	'Buenos Aires': 'Argentina',
	Brasilia: 'Brasil',
	Bogotá: 'Colombia',
	Santiago: 'Chile',
	Asunción: 'Paraguay',
	Montevideo: 'Uruguay',
};

const COUNTRIES_AND_CAPITALS = {
	Argentina: 'Buenos Aires',
	Brasil: 'Brasilia',
	Colombia: 'Bogotá',
	Chile: 'Santiago',
	Paraguay: 'Asunción',
	Uruguay: 'Montevideo',
};

/**
 * @param {Country} country - Nombre del país
 * @returns {Capital | undefined} - Nombre de la capital o mensaje de error
 */
function getCapital(country) {
	if (country in COUNTRIES_AND_CAPITALS) {
		return COUNTRIES_AND_CAPITALS[country];
	}

	return;
}

SELECT_COUNTRIES.addEventListener('change', () => {
	if (
		!(SELECT_COUNTRIES instanceof HTMLSelectElement) &&
		!(SELECT_CAPITALS instanceof HTMLSelectElement)
	) {
		console.error(
			'Error: SELECT_COUNTRIES or SELECT_CAPITALS is not an HTMLSelectElement',
		);

		return;
	}

	const SELECTED_COUNTRY = SELECT_COUNTRIES.value;
	const CAPITAL_SELECTED_COUNTRY = getCapital(SELECTED_COUNTRY);

	if (!CAPITAL_SELECTED_COUNTRY) {
		console.error(CAPITAL_SELECTED_COUNTRY);

		return;
	}

	SELECT_CAPITALS.value = CAPITAL_SELECTED_COUNTRY;

	console.info(`País seleccionado: ${SELECTED_COUNTRY}`);
	console.info(
		`La capital de ${SELECTED_COUNTRY} es ${getCapital(SELECTED_COUNTRY)}`,
	);
});

/**
 * @param {Country} country - Nombre del país
 * @returns {Capital | undefined} - Nombre de la capital o mensaje de error
 */
function getCapital(country) {
	if (country in COUNTRIES_AND_CAPITALS) {
		return COUNTRIES_AND_CAPITALS[country];
	}

	return;
}

SELECT_COUNTRIES.addEventListener('change', () => {
	if (
		!(SELECT_COUNTRIES instanceof HTMLSelectElement) &&
		!(SELECT_CAPITALS instanceof HTMLSelectElement)
	) {
		console.error(
			'Error: SELECT_COUNTRIES or SELECT_CAPITALS is not an HTMLSelectElement',
		);

		return;
	}

	const SELECTED_COUNTRY = SELECT_COUNTRIES.value;
	const CAPITAL_SELECTED_COUNTRY = getCapital(SELECTED_COUNTRY);

	if (!CAPITAL_SELECTED_COUNTRY) {
		console.error(CAPITAL_SELECTED_COUNTRY);

		return;
	}

	SELECT_CAPITALS.value = CAPITAL_SELECTED_COUNTRY;

	console.info(`País seleccionado: ${SELECTED_COUNTRY}`);
	console.info(
		`La capital de ${SELECTED_COUNTRY} es ${getCapital(SELECTED_COUNTRY)}`,
	);
});
