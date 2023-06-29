//Ejercicio 24

let deportista = {
    energia: 100,
    experiencia: 10,
    nombre: "M. Jordan",
    entrenarHoras: function (cantidadHoras) {
      this.energia -= cantidadHoras * 5;
      this.experiencia += cantidadHoras * 2;
    }
  };
  
  // Ejemplo de uso: entrenar durante 3 horas
  deportista.entrenarHoras(3);
  
  // Imprimir el estado actual del deportista
  console.log(deportista.energia);
  console.log(deportista.experiencia);