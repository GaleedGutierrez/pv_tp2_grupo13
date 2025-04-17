const nombres = ['Martina', 'Joaquín', 'Valentina', 'Tomás', 'Emilia', 'Mateo'];
let nombreMasLargo = '';

nombres.forEach((nombre) => {
	if (nombre.length > nombreMasLargo.length) {
		nombreMasLargo = nombre;
	}
});
console.info('Nombre mas largo del array es: ', nombreMasLargo);