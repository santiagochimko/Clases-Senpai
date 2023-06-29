function mostrarMenor(num1, num2, num3) {
    let menor = num1; // Asignar el primer número como el menor inicialmente
  
    // Comparar con el segundo número
    if (num2 < menor) {
      menor = num2;
    }
  
    // Comparar con el tercer número
    if (num3 < menor) {
      menor = num3;
    }
  
    console.log("El número menor es:", menor);
  }
  
  // Ejemplo de uso de la función
  mostrarMenor(10, 5, 8);
  