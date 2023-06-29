//Ejercicio 18

let array = [true, 'hola', 4, null];

// Función para imprimir el tercer elemento del arreglo
const imprimirTercerElemento = (arr) => {
  console.log(arr[2]);
};

// Función para cambiar el último valor por un 3
const cambiarUltimoValor = (arr) => {
  arr[arr.length - 1] = 3;
};

// Función para remover los últimos dos elementos del arreglo
const removerUltimosDosElementos = (arr) => {
  arr.splice(-2);
};

// Función para agregar un 6 y 'chau' al final del arreglo
const agregarElementosAlFinal = (arr) => {
  arr.push(6, 'chau');
};

// Función para insertar un 5 en la tercera posición del arreglo
const insertarElementoEnTerceraPosicion = (arr) => {
  arr.splice(2, 0, 5);
};

// Llamada a las funciones
imprimirTercerElemento(array);
cambiarUltimoValor(array);
console.log(array);
removerUltimosDosElementos(array);
console.log(array);
agregarElementosAlFinal(array);
console.log(array);
insertarElementoEnTerceraPosicion(array);
console.log(array);