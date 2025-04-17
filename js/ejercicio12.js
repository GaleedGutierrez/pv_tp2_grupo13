const numero = prompt('Ingrese un numero: ');
const resto = numero % 2;

if (resto === 0) {
	alert(`${numero} es par`);
} else {
	alert(`${numero} es impar`);
}
