function obtenerLongitudes(array) {
  const longitudes = array.map(str => str.length);
  return longitudes;
}

// Ejemplo de uso de la función
const arrayOriginal = ["Hola", "celular", "ser", "exige"];
const resultado = obtenerLongitudes(arrayOriginal);
console.log("Array de longitudes:", resultado);
