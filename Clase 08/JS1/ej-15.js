//Ejercicio 14

let nombre = prompt("Ingrese el nombre del postulante:");
let totalPreguntas = parseInt(prompt("Ingrese la cantidad total de preguntas realizadas:"));
let respuestasCorrectas = parseInt(prompt("Ingrese la cantidad de respuestas correctas:"));

let porcentajeCorrectas = (respuestasCorrectas / totalPreguntas) * 100;

if (porcentajeCorrectas >= 90) {
  console.log(nombre + " tiene un nivel superior.");
} else if (porcentajeCorrectas >= 75 && porcentajeCorrectas < 90) {
  console.log(nombre + " tiene un nivel medio.");
} else if (porcentajeCorrectas >= 50 && porcentajeCorrectas < 75) {
  console.log(nombre + " tiene un nivel regular.");
} else {
  console.log(nombre + " está fuera de nivel.");
}