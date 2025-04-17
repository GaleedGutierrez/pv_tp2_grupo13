/**
 * @type {HTMLInputElement | null} Campo de texto para ingresar el texto
 */
const INPUT_TEXT = document.querySelector('#input-text');
/**
 * @type {HTMLParagraphElement | null} Texto que se mostrará en base al texto ingresado en el input
 */
const SEE_TEXT_FIELD = document.querySelector('#see-text-field');

if (!INPUT_TEXT || !SEE_TEXT_FIELD) {
	throw new Error('No se encontró el elemento del DOM');
}

/**
 * Cambia el color de fondo del elemento
 * @param {HTMLElement} element - Elemento al que se le cambiará el color de fondo
 */
const addBackgroundColor = (element) => {
	element.classList.add('bg-amber-200');
};

/**
 * Elimina el color de fondo del elemento
 * @param {HTMLElement} element - Elemento al que se le cambiará el color de fondo
 */
const removeBackgroundColor = (element) => {
	element.classList.remove('bg-amber-200');
};

INPUT_TEXT.addEventListener('input', (event) => {
	const USER_TEXT = event.target.value;

	if (!USER_TEXT) {
		SEE_TEXT_FIELD.innerText = 'No hay texto';

		return;
	}

	if (USER_TEXT.length > 20) {
		addBackgroundColor(SEE_TEXT_FIELD);
	}

	if (
		USER_TEXT.length <= 20 &&
		SEE_TEXT_FIELD.classList.contains('bg-amber-200')
	) {
		removeBackgroundColor(SEE_TEXT_FIELD);
	}

	SEE_TEXT_FIELD.innerText = USER_TEXT;
});
