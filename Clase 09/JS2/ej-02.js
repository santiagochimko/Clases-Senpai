//Ejercicio 2

// Mostrar los múltiplos de 8 hasta el valor 500
for (let i = 8; i <= 500; i += 8) {
    console.log(i);
  }
  
  // Inicializar la variable para el primer múltiplo
  let numeroInicial = parseInt(prompt("que numero?"));
  let numero = numeroInicial;
  
  // Mostrar los múltiplos de 8 hasta el valor 500 utilizando while
  while (multiplo <= 500) {
    console.log(numero);
    numero += numeroInicial;
  }
  