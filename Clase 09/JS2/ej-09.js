//Ejercicio 9

// Variable para contar la cantidad de triángulos con superficie mayor a 12
let cantidadSuperficieMayor12 = 0;

// Leer los datos de los 3 triángulos
for (let i = 1; i <= 3; i++) {
  console.log("Triángulo " + i + ":");
  let base = parseFloat(prompt("Ingrese la medida de la base:"));
  let altura = parseFloat(prompt("Ingrese la medida de la altura:"));

  // Calcular la superficie del triángulo
  let superficie = (base * altura) / 2;

  // Mostrar los datos del triángulo
  console.log("Medida de la base: " + base);
  console.log("Medida de la altura: " + altura);
  console.log("Superficie: " + superficie);

  // Verificar si la superficie es mayor a 12
  if (superficie > 12) {
    cantidadSuperficieMayor12++;
  }
}

// Mostrar la cantidad de triángulos con superficie mayor a 12
console.log("Cantidad de triángulos con superficie mayor a 12: " + cantidadSuperficieMayor12);