//Ejercicio 6

// Pedir al usuario que ingrese las tres notas del alumno
let nota1 = parseInt(prompt("Ingrese la primera nota:"));
let nota2 = parseInt(prompt("Ingrese la segunda nota:"));
let nota3 = parseInt(prompt("Ingrese la tercera nota:"));

// Calcular el promedio
let suma = nota1 + nota2 + nota3;
let promedio = suma / 3;

// Verificar si el promedio es mayor o igual a siete
if (promedio >= 7) {
  console.log("Promocionado");
} else {
  console.log("Reprovado");
}