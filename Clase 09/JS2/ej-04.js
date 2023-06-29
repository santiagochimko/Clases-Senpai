//Ejercicio 4

// Variable para almacenar la suma de las alturas en centímetros
var sumaAlturas = 0;

// Leer 5 alturas de personas y sumarlas
for (var i = 1; i <= 5; i++) {
  var altura = parseFloat(prompt("Ingrese la altura de la persona " + i + " en centímetros:"));
  sumaAlturas += altura;
}

// Calcular la altura promedio en metros
var alturaPromedio = sumaAlturas / 5 / 100; // Dividimos por 5 y luego por 100 para convertir centímetros a metros

// Mostrar el resultado
console.log("La altura promedio de las personas es: " + alturaPromedio.toFixed(2) + " metros");