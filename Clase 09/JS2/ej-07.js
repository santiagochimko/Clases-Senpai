//Ejercicio 7

// Variables para almacenar los valores acumulados de cada lista
let acumuladoLista1 = 0;
let acumuladoLista2 = 0;

// Cargar valores de la Lista 1
console.log("Cargar valores de la Lista 1:");
for (let i = 1; i <= 3; i++) {
  let valor = parseInt(prompt("Ingrese el valor " + i + " de la Lista 1:"));
  acumuladoLista1 += valor;
}

// Cargar valores de la Lista 2
console.log("Cargar valores de la Lista 2:");
for (let i = 1; i <= 3; i++) {
  let valor = parseInt(prompt("Ingrese el valor " + i + " de la Lista 2:"));
  acumuladoLista2 += valor;
}

// Comparar los valores acumulados y mostrar el resultado
if (acumuladoLista1 > acumuladoLista2) {
  console.log("La Lista 1 tiene un valor acumulado mayor");
} else if (acumuladoLista2 > acumuladoLista1) {
  console.log("La Lista 2 tiene un valor acumulado mayor");
} else {
  console.log("Las listas tienen un valor acumulado igual");
}

//--- Con valores fijos ---

// Listas con valores fijos
let lista1 = [5, 10, 15];
let lista2 = [8, 12, 20];

// Variables para almacenar los valores acumulados de cada lista
let acumulaLista1 = 0;
let acumulaLista2 = 0;

// Calcular el valor acumulado de la Lista 1
for (let i = 0; i < lista1.length; i++) {
  acumulaLista1 += lista1[i];
}

// Calcular el valor acumulado de la Lista 2
for (let i = 0; i < lista2.length; i++) {
  acumulaLista2 += lista2[i];
}

// Comparar los valores acumulados y mostrar el resultado
if (acumulaLista1 > acumulaLista2) {
  console.log("La Lista 1 tiene un valor acumulado mayor");
} else if (acumulaLista2 > acumulaLista1) {
  console.log("La Lista 2 tiene un valor acumulado mayor");
} else {
  console.log("Las listas tienen un valor acumulado igual");
}