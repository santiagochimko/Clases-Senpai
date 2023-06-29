function mostrarOrdenados(num1, num2, num3) {
  const numeros = [num1, num2, num3];
  numeros.sort((a, b) => a - b);
  
  console.log("Los números ordenados de menor a mayor son:", numeros);
}

// Ejemplo de uso de la función
mostrarOrdenados(10, 5, 8);
