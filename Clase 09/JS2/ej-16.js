//Ejercicio 15

let edadesManana = [];
let edadesTarde = [];
let edadesNoche = [];

// Ingresar edades de los estudiantes del turno mañana
for (let i = 1; i <= 5; i++) {
  let edad = parseInt(prompt("Ingrese la edad del estudiante " + i + " del turno mañana:"));
  edadesManana.push(edad);
}

// Ingresar edades de los estudiantes del turno tarde
for (let i = 1; i <= 6; i++) {
  let edad = parseInt(prompt("Ingrese la edad del estudiante " + i + " del turno tarde:"));
  edadesTarde.push(edad);
}

// Ingresar edades de los estudiantes del turno noche
for (let i = 1; i <= 11; i++) {
  let edad = parseInt(prompt("Ingrese la edad del estudiante " + i + " del turno noche:"));
  edadesNoche.push(edad);
}

// Calcular promedio de cada turno
let promedioManana = calcularPromedio(edadesManana);
let promedioTarde = calcularPromedio(edadesTarde);
let promedioNoche = calcularPromedio(edadesNoche);

// Mostrar promedio de cada turno
console.log("Promedio de edades del turno mañana: " + promedioManana.toFixed(2));
console.log("Promedio de edades del turno tarde: " + promedioTarde.toFixed(2));
console.log("Promedio de edades del turno noche: " + promedioNoche.toFixed(2));

// Determinar turno con el promedio mayor
if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
  console.log("El turno mañana tiene un promedio de edades mayor.");
} else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
  console.log("El turno tarde tiene un promedio de edades mayor.");
} else if (promedioNoche > promedioManana && promedioNoche > promedioTarde) {
  console.log("El turno noche tiene un promedio de edades mayor.");
} else {
  console.log("Hay dos o más turnos con el mismo promedio de edades.");
}

// Función para calcular el promedio de un array de edades
function calcularPromedio(edades) {
  let suma = 0;
  for (let i = 0; i < edades.length; i++) {
    suma += edades[i];
  }
  return suma / edades.length;
}

//Ejercicio de ciclos

let arreglo = ['H', 'o', 'l', 'a', '!'];

// Imprimir todo el arreglo en una misma palabra
let palabra = arreglo.join('');
console.log(palabra);

// Agregar espacios entre las letras e imprimir nuevamente
let palabraConEspacios = arreglo.join(' ');
console.log(palabraConEspacios);

//-----

let arregloDos = ['H', 'o', 'l', 'a', '!'];

// Imprimir todo el arreglo en una misma palabra utilizando un ciclo for
let palabraDos = '';
let palabraConEspaciosDos = '';
for (let i = 0; i < arregloDos.length; i++) {
  palabraDos += arregloDos[i];
  palabraConEspaciosDos += arregloDos[i];
  if (i < arregloDos.length - 1) {
    palabraConEspaciosDos += ' ';
  }
}
console.log(palabraDos);
console.log(palabraConEspaciosDos);

//-----

let saludo = ['H', 'o', 'l', 'a', '!'];

// Imprimir todo el arreglo en una misma palabra y separada utilizando un bucle while
let i = 0;
let palabraTres = '';
let palabraConEspaciosTres = '';
while (i < saludo.length) {
  palabraTres += saludo[i];
  palabraConEspaciosTres += saludo[i];
  if (i < saludo.length - 1) {
    palabraConEspaciosTres += ' ';
  }
  i++;
}
console.log(palabraTres);
console.log(palabraConEspaciosTres);