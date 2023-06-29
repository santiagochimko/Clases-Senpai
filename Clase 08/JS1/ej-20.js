//Ejercicio 19

// Obtener las medidas del terreno
let baseMayor = parseInt(prompt("Ingresa la base mayor del trapecio:"));
let baseMenor = parseInt(prompt("Ingresa la base menor del trapecio:"));
let alturaTrapecio = parseInt(prompt("Ingresa la altura del trapecio:"));
let alturaTriangulo = parseInt(prompt("Ingresa la altura del triángulo:"));
let base = parseInt(prompt("Ingresa la base del triángulo y del rectángulo:"));
let alturaRectangulo = parseInt(prompt("Ingresa la altura del rectángulo:"));

// Calcular el área del trapecio
let areaTrapecio = ((baseMayor + baseMenor) * alturaTrapecio) / 2;

// Calcular el área del triángulo
let areaTriangulo = (base * alturaTriangulo) / 2;

// Calcular el área del rectángulo
let areaRectangulo = base * alturaRectangulo;

// Calcular el área total del terreno sumando las áreas de las figuras
let areaTotal = areaTrapecio + areaTriangulo + areaRectangulo;

// Mostrar el resultado en la consola
console.log("El área del terreno es: " + areaTotal);
