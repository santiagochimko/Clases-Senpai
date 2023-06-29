//Ejercicio 22

// Generar un array de números aleatorios
let numeroS = [];
for (let i = 0; i < 10; i++) {
  let numero = Math.floor(Math.random() * 100); // Generar número aleatorio entre 0 y 99
  numeroS.push(numero);
}

// Ordenar los números de menor a mayor
numeroS.sort(function (a, b) {
  return a - b;
});

// Mostrar los números ordenados en la consola
console.log(numeroS);