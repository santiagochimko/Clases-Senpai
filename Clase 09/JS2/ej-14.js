//Ejercicio 13

let cantidadPuntos = parseInt(prompt("Ingrese la cantidad de puntos a procesar:"));
let primerCuadrante = 0;
let segundoCuadrante = 0;
let tercerCuadrante = 0;
let cuartoCuadrante = 0;

for (let i = 1; i <= cantidadPuntos; i++) {
  let x = parseFloat(prompt("Ingrese la coordenada x del punto " + i + ":"));
  let y = parseFloat(prompt("Ingrese la coordenada y del punto " + i + ":"));

  if (x > 0 && y > 0) {
    primerCuadrante++;
  } else if (x < 0 && y > 0) {
    segundoCuadrante++;
  } else if (x < 0 && y < 0) {
    tercerCuadrante++;
  } else if (x > 0 && y < 0) {
    cuartoCuadrante++;
  }
}

console.log("Cantidad de puntos en el primer cuadrante: " + primerCuadrante);
console.log("Cantidad de puntos en el segundo cuadrante: " + segundoCuadrante);
console.log("Cantidad de puntos en el tercer cuadrante: " + tercerCuadrante);
console.log("Cantidad de puntos en el cuarto cuadrante: " + cuartoCuadrante);