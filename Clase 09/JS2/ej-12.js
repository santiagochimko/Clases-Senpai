//Ejercicio 12

// Solicitar al usuario ingresar un valor del 1 al 10
let valor = parseInt(prompt("Ingrese un valor del 1 al 10:"));

// Validar que el valor esté dentro del rango
if (valor >= 1 && valor <= 10) {
  // Mostrar la tabla de multiplicar del valor ingresado
  for (let i = 1; i <= 12; i++) {
    let resultado = valor * i;
    console.log(valor + " x " + i + " = " + resultado);
  }
} else {
  console.log("El valor ingresado está fuera del rango permitido.");
}