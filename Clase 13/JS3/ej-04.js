function obtenerMayor(num1, num2, num3) {
  let mayor = num1; // Asignar el primer número como el mayor inicialmente

  // Comparar con el segundo número
  if (num2 > mayor) {
    mayor = num2;
  }

  // Comparar con el tercer número
  if (num3 > mayor) {
    mayor = num3;
  }

  return mayor;
}

// Ejemplo de uso de la función
const resultado = obtenerMayor(10, 5, 8);
console.log("El número mayor es:", resultado);
