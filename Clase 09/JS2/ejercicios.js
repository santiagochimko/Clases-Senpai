//Si el usuario es menor de 18 años, le sadrá, debajo de su nombre completo y año de nacimiento, el mensaje:
//"Eres menor de edad, no podemos darte de alta hasta el año XXXX"

//Si es mayor de 18 años y menor de 25 años, le saldrá el mensaje: "tienes un 10 % de descuento"
//Si es mayor de 25 años, le saldrá el mensaje: "lo sentimos pero no tienes descuento"
//Si tiene justo 18 o 25 años, le saldrá el mensaje: "Premio, tienes un descuento especial del 20 %"

// Pedir al usuario que ingrese su nombre completo
let nombreCompleto = prompt("Ingrese su nombre completo:");

// Pedir al usuario que ingrese su año de nacimiento
let anoNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));

// Calcular la edad del usuario
let anoActual = new Date().getFullYear();
let edad = anoActual - anoNacimiento;

// Mostrar el nombre completo y año de nacimiento
console.log("Nombre completo: " + nombreCompleto);
console.log("Año de nacimiento: " + anoNacimiento);

// Verificar la edad del usuario y mostrar el mensaje correspondiente
if (edad < 18) {
    let anioPermitido = anoNacimiento + 18;
    console.log("Eres menor de edad, no podemos darte de alta hasta el año " + anioPermitido);
} else if (edad === 18 || edad === 25) {
    console.log("Premio, tienes un descuento especial del 20 %");
} else if (edad > 18 && edad < 25) {
    console.log("Tienes un 10 % de descuento");
} else {
    console.log("Lo sentimos pero no tienes descuento");
}

/*
// Verificar la edad del usuario y mostrar el mensaje correspondiente utilizando switch
switch (true) {
    case (edad < 18):
      var anioPermitido = anoNacimiento + 18;
      console.log("Eres menor de edad, no podemos darte de alta hasta el año " + anioPermitido);
      break;
    case (edad === 18 || edad === 25):
      console.log("Premio, tienes un descuento especial del 20 %");
      break;
    case (edad > 18 && edad < 25):
      console.log("Tienes un 10 % de descuento");
      break;
    default:
      console.log("Lo sentimos pero no tienes descuento");
  }
*/