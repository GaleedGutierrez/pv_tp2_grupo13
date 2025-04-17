/**
 * @type {HTMLButtonElement | null}
 * */
const BUTTON_CHANGE_COLOR = document.querySelector('#button-change-color');
/**
 * @type {HTMLBodyElement | null}
 * */
const BODY = document.querySelector('#body');

/**
 * Array de clases CSS para los diferentes colores de fondo
 * @type {string[]}
 */
const BACKGROUND_COLORS = [
	'bg-amber-100',
	'bg-amber-200',
	'bg-red-100',
	'bg-orange-100',
	'bg-yellow-100',
	'bg-lime-100',
	'bg-green-100',
	'bg-violet-100',
	'bg-blue-100',
];

/**
 * @description Cambia el color de fondo del body a un color aleatorio
 * @returns {void}
 */
const changeBackgroundColor = () => {
	if (!BODY) {
		console.error('BODY is not found');

		return;
	}

	// Remover todas las clases de color de fondo previas
	BACKGROUND_COLORS.forEach((colorClass) => {
		BODY.classList.remove(colorClass);
	});

	// Seleccionar un color aleatorio del array
	const RANDOM_INDEX = Math.floor(Math.random() * BACKGROUND_COLORS.length);
	const RANDOM_COLOR_CLASS = BACKGROUND_COLORS[RANDOM_INDEX];

	// Aplicar el nuevo color de fondo
	BODY.classList.add(RANDOM_COLOR_CLASS);
	console.info(`Color de fondo cambiado a: ${RANDOM_COLOR_CLASS}`);
};

if (BUTTON_CHANGE_COLOR instanceof HTMLButtonElement) {
	BUTTON_CHANGE_COLOR.addEventListener('click', changeBackgroundColor);
}
