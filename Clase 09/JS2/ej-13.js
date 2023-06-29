//Ejercicio 12.1

// Variables para contar la cantidad de triángulos de cada tipo
let equilateros = 0;
let isosceles = 0;
let escalenos = 0;

// Variables para almacenar el tipo de triángulo con la menor cantidad
let tipoMenorCantidad = "";
let menorCantidad = Infinity;

// Leer los lados de 4 triángulos y determinar su tipo
for (let i = 1; i <= 4; i++) {
  let lado1 = parseInt(prompt("Ingrese el lado 1 del triángulo " + i + ":"));
  let lado2 = parseInt(prompt("Ingrese el lado 2 del triángulo " + i + ":"));
  let lado3 = parseInt(prompt("Ingrese el lado 3 del triángulo " + i + ":"));

  // Determinar el tipo de triángulo
  if (lado1 === lado2 && lado1 === lado3) {
    console.log("El triángulo " + i + " es equilátero.");
    equilateros++;
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo " + i + " es isósceles.");
    isosceles++;
  } else {
    console.log("El triángulo " + i + " es escaleno.");
    escalenos++;
  }
}

// Determinar el tipo de triángulo con la menor cantidad
if (equilateros < menorCantidad) {
  menorCantidad = equilateros;
  tipoMenorCantidad = "equiláteros";
} else if (equilateros === menorCantidad) {
  tipoMenorCantidad += ", equilateros";
}
if (isosceles < menorCantidad) {
  menorCantidad = isosceles;
  tipoMenorCantidad = "isósceles";
} else if (isosceles === menorCantidad) {
  tipoMenorCantidad += ", isósceles";
}
if (escalenos < menorCantidad) {
  menorCantidad = escalenos;
  tipoMenorCantidad = "escalenos";
} else if (escalenos === menorCantidad) {
  tipoMenorCantidad += ", escalenos";
}

// Mostrar la cantidad de triángulos de cada tipo
console.log("Cantidad de triángulos equiláteros: " + equilateros);
console.log("Cantidad de triángulos isósceles: " + isosceles);
console.log("Cantidad de triángulos escalenos: " + escalenos);

// Mostrar el tipo de triángulo con la menor cantidad
console.log("El tipo de triángulo con menor cantidad es: " + tipoMenorCantidad);