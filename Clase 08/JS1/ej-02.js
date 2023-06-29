//Ejercicio 1

// Pedir al usuario que ingrese el día
let dia = prompt("Ingresa el día:");

// Pedir al usuario que ingrese el mes
let mes = prompt("Ingresa el mes:");

// Pedir al usuario que ingrese el año
let año = prompt("Ingresa el año:");

// Crear un objeto de fecha con los valores ingresados
let fechaIngresada = new Date(año, mes - 1, dia);

// Obtener el mes y el día de la fecha ingresada
let mesIngresado = fechaIngresada.getMonth();
let diaIngresado = fechaIngresada.getDate();

// Verificar si la fecha ingresada corresponde a Navidad
if (mesIngresado === 11 && diaIngresado === 25) {
  console.log("La fecha ingresada corresponde a Navidad.");
} else {
  console.log("La fecha ingresada no corresponde a Navidad.");
}
