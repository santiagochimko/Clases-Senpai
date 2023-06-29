function contarDigitos(numero) {
  // Convertir el número a cadena de texto
  const numeroTexto = numero.toString();

  // Obtener la longitud de la cadena de texto
  const cantidadDigitos = numeroTexto.length;

  return cantidadDigitos;
}

// Ejemplo de uso de la función
const numero = 12345;
const cantidadDigitos = contarDigitos(numero);
console.log("La cantidad de dígitos es:", cantidadDigitos);
