//Ejercicio 14

let cantidadNegativos = 0;
let cantidadPositivos = 0;
let cantidadMultiplos15 = 0;
let acumuladoPares = 0;

for (let i = 1; i <= 10; i++) {
  let valor = parseInt(prompt("Ingrese el valor " + i + ":"));

  if (valor < 0) {
    cantidadNegativos++;
  } else if (valor > 0) {
    cantidadPositivos++;
  }

  if (valor % 15 === 0) {
    cantidadMultiplos15++;
  }

  if (valor % 2 === 0) {
    acumuladoPares += valor;
  }
}

console.log("Cantidad de valores negativos: " + cantidadNegativos);
console.log("Cantidad de valores positivos: " + cantidadPositivos);
console.log("Cantidad de múltiplos de 15: " + cantidadMultiplos15);
console.log("Valor acumulado de los números pares: " + acumuladoPares);