//Ejercicio 8

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

if (numero1 > numero2) {
  let suma = numero1 + numero2;
  let diferencia = numero1 - numero2;

  console.log("El primer número es mayor al segundo.");
  console.log("La suma de los números es: " + suma);
  console.log("La diferencia de los números es: " + diferencia);
} else {
  let producto = numero1 * numero2;
  let division = numero1 / numero2;

  console.log("El primer número es menor o igual al segundo.");
  console.log("El producto de los números es: " + producto);
  console.log("La división del primer número respecto al segundo es: " + division);
}
