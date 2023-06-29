//Ejercicio 8

// Variables para contar los números pares e impares
let numerosPares = 0;
let numerosImpares = 0;

// Cargar los 5 números enteros
for (let i = 1; i <= 5; i++) {
  let numero = parseInt(prompt("Ingrese el número " + i + ":"));

  // Verificar si el número es par o impar utilizando el operador %
  if (numero % 2 === 0) {
    numerosPares++;
  } else {
    numerosImpares++;
  }
}

// Mostrar los resultados
console.log("Cantidad de números pares: " + numerosPares);
console.log("Cantidad de números impares: " + numerosImpares);