function mostrarNumeros() {
    const menor = parseInt(prompt("Ingrese el número menor:"));
    const mayor = parseInt(prompt("Ingrese el número mayor:"));
  
    // Verificar que el menor sea realmente menor que el mayor
    if (menor > mayor) {
      console.log("El número menor debe ser realmente menor que el número mayor.");
      return; // Salir de la función si la condición no se cumple
    }
  
    // Mostrar los números desde el menor hasta el mayor
    for (let i = menor; i <= mayor; i++) {
      console.log(i);
    }
  }
  
  // Ejecutar la función
  mostrarNumeros();
  