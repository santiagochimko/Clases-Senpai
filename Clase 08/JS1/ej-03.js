//Ejercicio 2

// Pedir al usuario que ingrese los tres valores
let valor1 = parseInt(prompt("Ingresa el primer valor:"));
let valor2 = parseInt(prompt("Ingresa el segundo valor:"));
let valor3 = parseInt(prompt("Ingresa el tercer valor:"));

// Verificar si todos los valores son iguales
if (valor1 === valor2 && valor1 === valor3) {
  // Calcular la suma del primero con el segundo
  let suma = valor1 + valor2;

  // Multiplicar el resultado de la suma por el tercer valor
  let resultado = suma * valor3;

  console.log("El resultado es: " + resultado);
} else {
  console.log("Los números no son iguales.");
}
