//Ejercicio 10

// Variable para almacenar la suma de los últimos 5 números ingresados
let sumaUltimos5 = 0;

// Solicitar la carga de 10 números
for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt("Ingrese el número " + i + ":"));

  // Sumar los últimos 5 números ingresados
  if (i > 5) {
    sumaUltimos5 += numero;
  }
}

// Imprimir la suma de los últimos 5 números ingresados
console.log("La suma de los últimos 5 números ingresados es: " + sumaUltimos5);