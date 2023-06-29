//Ejercicio 3

// Pedir al usuario que ingrese los tres números
let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));
let numero3 = parseInt(prompt("Ingresa el tercer número:"));

// Verificar si todos los números son menores a 10
if (numero1 < 10 && numero2 < 10 && numero3 < 10) {
  document.write("Todos los números son menores a diez");
} else {
  document.write("Hay números que son mayores a diez");
}
