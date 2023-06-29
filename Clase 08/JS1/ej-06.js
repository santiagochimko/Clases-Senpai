//Ejercicio 5

// Pedir al usuario que ingrese el sueldo y la antigüedad del operario
let sueldo = parseFloat(prompt("Ingresa el sueldo del operario:"));
let antiguedad = parseInt(prompt("Ingresa los años de antigüedad del operario:"));

// Verificar las condiciones y calcular el sueldo a pagar
if (sueldo < 500 && antiguedad >= 10) {
  let aumento = sueldo * 0.2; // 20% de aumento
  let sueldoAPagar = sueldo + aumento;
  document.write("Sueldo a pagar: $" + sueldoAPagar);
} else if (sueldo < 500 && antiguedad < 10) {
  let aumento = sueldo * 0.05; // 5% de aumento
  let sueldoAPagar = sueldo + aumento;
  document.write("Sueldo a pagar: $" + sueldoAPagar);
} else {
  document.write("Sueldo sin cambios: $" + sueldo);
}
