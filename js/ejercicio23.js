/**
 * @type {NodeListOf<HTMLInputElement>}
 */
const radioButtons = document.querySelectorAll(
	'input[type="radio"][name="lenguaje"]',
);
/**
 * @type {HTMLParagraphElement | null}
 */
const resultadoElement = document.getElementById('resultado');

radioButtons.forEach((radioButton) => {
	radioButton.addEventListener('change', (event) => {
		/**
		 * @type {string}
		 * @description Lenguaje seleccionado por el usuario.
		 */
		const lenguajeSeleccionado = event.target.value;

		resultadoElement.textContent = `Has seleccionado: ${lenguajeSeleccionado}`;
		console.info(`Lenguaje seleccionado: ${lenguajeSeleccionado}`);
	});
});
