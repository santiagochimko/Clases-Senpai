//Ejercicio 16

//Declaracion del valor
let vector = [];
let acumuladoTotal = 0;
let acumuladoMayor36 = 0;
let cantidadMayores50 = 0;

//Ingreso de los elementos del vector
for (let i = 0; i < 8; i++) {
  let elemento = parseInt(prompt(`Ingrese el elemento ${i + 1}`));
  vector.push(elemento);
  acumuladoTotal += elemento;
  if (elemento > 36) {
    acumuladoMayor36 += elemento;
    if (elemento > 50) {
      cantidadMayores50++;
    }
  }
}

console.log(`Valor acumulado de todos los elementos: ${acumuladoTotal}`);
console.log(`Valor acumulado de todos los elementos mayores a 36: ${acumuladoMayor36}`);
console.log(`Valor acumulado de todos los elementos mayores a 50: ${cantidadMayores50}`);