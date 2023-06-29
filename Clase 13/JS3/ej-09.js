function filtrarMayoresIguales(array) {
  const primerNumero = array[0];
  const resultado = array.filter(num => num >= primerNumero);
  return resultado;
}

// Ejemplo de uso de la función
const arrayOriginal = [5, 3, 8, 2, 7, 9];
const resultado = filtrarMayoresIguales(arrayOriginal);
console.log("Nuevo array filtrado:", resultado);
