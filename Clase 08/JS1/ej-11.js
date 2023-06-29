//Ejercicio 10

let numero = parseInt(prompt("Ingrese un número positivo de uno o dos dígitos:"));

if (numero >= 1 && numero <= 99) {
  if (numero >= 10 && numero <= 99) {
    console.log("El número tiene dos dígitos.");
  } else {
    console.log("El número tiene un dígito.");
  }
} else {
  console.log("El número ingresado no es válido.");
}