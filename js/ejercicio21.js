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

INPUT_TEXT.addEventListener('input', (event) => {
	const USER_TEXT = event.target.value;

	if (!USER_TEXT) {
		SEE_TEXT_FIELD.innerText = 'No hay texto';

		return;
	}

	SEE_TEXT_FIELD.innerText = USER_TEXT;
});
