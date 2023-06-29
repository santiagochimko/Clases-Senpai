//Ejercicio 5

// Variables para contar los empleados según su rango salarial
let empleadosEntre100y300 = 0;
let empleadosMasDe300 = 0;

// Variable para almacenar el importe total de los sueldos
let importeTotalSueldos = 0;

// Leer los sueldos de los 5 empleados y realizar los cálculos
for (let i = 1; i <= 5; i++) {
  let sueldo = parseFloat(prompt("Ingrese el sueldo del empleado " + i + ":"));
  importeTotalSueldos += sueldo;

  if (sueldo >= 100 && sueldo <= 300) {
    empleadosEntre100y300++;
  } else if (sueldo > 300) {
    empleadosMasDe300++;
  }
}

// Mostrar los resultados
console.log("Cantidad de empleados que cobran entre $100 y $300: " + empleadosEntre100y300);
console.log("Cantidad de empleados que cobran más de $300: " + empleadosMasDe300);
console.log("Importe total de sueldos de la empresa: $" + importeTotalSueldos.toFixed(2));