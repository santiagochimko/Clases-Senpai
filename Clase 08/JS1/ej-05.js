//Ejercicio 4

// Pedir al usuario que ingrese las coordenadas x e y
let x = parseInt(prompt("Ingresa la coordenada x:"));
let y = parseInt(prompt("Ingresa la coordenada y:"));

// Verificar en qué cuadrante se ubica el punto
if (x > 0 && y > 0) {
  console.log("El punto se ubica en el 1er cuadrante.");
} else if (x < 0 && y > 0) {
  console.log("El punto se ubica en el 2do cuadrante.");
} else if (x < 0 && y < 0) {
  console.log("El punto se ubica en el 3er cuadrante.");
} else if (x > 0 && y < 0) {
  console.log("El punto se ubica en el 4to cuadrante.");
} else if (x === 0 && y === 0) {
  console.log("El punto se ubica en el origen.");
} else {
  console.log("El punto se ubica en uno de los ejes.");
}
