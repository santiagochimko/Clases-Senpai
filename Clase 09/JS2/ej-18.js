//Ejercicio 17

//tamaño del vector
const largoVector = 5;
let vector1 = [];
let vector2 = [];
let vectorSuma = [];


for (let i = 0; i < largoVector; i++) {
  let elemento = parseInt(prompt(`Ingrese el elemento ${i + 1} del primer vector: `));
  vector1.push(elemento);
  let elementoDos = parseInt(prompt(`Ingrese el elemento ${i + 1} del segundo vector: `));
  vector2.push(elementoDos);
  vectorSuma.push(vector1[i] + vector2[i]);
}

console.log("El resultado de la suma de los vectores es: ");
console.log(vectorSuma);
