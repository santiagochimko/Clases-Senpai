// Declarativa

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log("");
  }
  
  function sumaDeDosValores(valorA, valorB) {
    const suma = valorA + valorB;
    console.log(suma);
  }
  
  // Llamada de la función
  // miFuncion("Perro", 5);
  
  sumaDeDosValores(10, 10);
  sumaDeDosValores(-10, 10);
  sumaDeDosValores(-100, 50);
  
  // Anónima
  const sumaDeDosValoresAnonima = function (valorA, valorB) {
    const suma = valorA + valorB;
    console.log(suma);
  };
  
  sumaDeDosValoresAnonima(10, 10);
  sumaDeDosValoresAnonima(-10, 10);
  sumaDeDosValoresAnonima(-100, 50);
  
  // Función flecha
  const miPrimeraFuncion = (valorA, valorB) => console.log(valorA + valorB);
  miPrimeraFuncion(10, 10);
  
  // Función saludar
  const saludar = function (nombre) {
    return `Hola, ${nombre}`;
  };
  
  // console.log(saludar("César"));
  // saludar("Rigoberto");
  
  // function calculoDeSalario(salarioBruto, descuento) {
  //   const salarioNeto = salarioBruto - descuento;
  //   return salarioNeto;
  // }
  
  // const salario = calculoDeSalario(1000, 150);
  
  // console.log(salario);
  
  // if (salario > 600) {
  //   console.log("Este mes todo bien");
  // }
  
  const empleado = {
    nombre: "Ronal",
    apellido: "Dinho",
    salario: 800,
    descuento: 100,
  };
  
  const calculoDeEdad = (fecha_nacimiento) => 2023 - fecha_nacimiento;
  
  const calculoSalario = (empleado) => {
    const salarioBruto = empleado.salario - empleado.descuento;
    return {
      edad: calculoDeEdad(1980),
      salarioBruto: salarioBruto,
    };
  };
  
  const { edad, salarioBruto } = calculoSalario(empleado);
  
  console.log(`El empleado tiene ${edad} y su salario es ${salarioBruto}`);
  console.log(salarioBruto);
  
  // const persona = {
  //   nombre: "Loe que",
  //   apellido: "Apellido",
  //   edad: 10,
  // };
  
  // const personita = {
  //   nombre: "Loe que",
  //   apellido: "Apellido",
  //   edad: 10,
  // };
  
  // const { nombre, apellido, edad } = persona;
  
  // console.log(persona.nombre);
  // console.log(nombre);