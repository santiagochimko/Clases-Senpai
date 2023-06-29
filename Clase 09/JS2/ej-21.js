//Ejercicio 20

let numeros = [];

// Llenar el arreglo con números aleatorios
for (let i = 0; i < 10; i++) {
  // Generar un número aleatorio entre 1 y 100
  let numero = Math.floor(Math.random() * 100) + 1;

  // Agregar el número al arreglo
  numeros.push(numero);
}

// Mostrar el arreglo por consola
console.log(numeros);

//Ejercicio 21
// Copiar el arreglo original utilizando slice()
let copiaNumeros = numeros.slice();

// Mostrar la copia del arreglo en la consola
console.log(copiaNumeros);