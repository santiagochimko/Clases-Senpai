//Ejercicio 16

let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));

if (numero1 > numero2) {
  document.write("El mayor número es: " + numero1);
} else if (numero2 > numero1) {
  document.write("El mayor número es: " + numero2);
} else {
  document.write("Los números son iguales");
}