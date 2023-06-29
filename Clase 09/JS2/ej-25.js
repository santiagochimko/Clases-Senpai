//Ejercicios del J2
//Ejercicio 25

// Definir la lista de alumnos como un arreglo vacío
let listaAlumnos = [];

// Función para agregar un alumno a la lista
function agregarAlumno(nombre, apellido, telefono, nacimiento, direccion) {
  // Crear un objeto que representa al alumno
  let alumno = {
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    nacimiento: nacimiento,
    direccion: direccion
  };

  // Agregar el alumno a la lista
  listaAlumnos.push(alumno);
}

// Agregar algunos alumnos a la lista
agregarAlumno("Juan", "Pérez", "123456789", "01/01/2000", "Calle 123");
agregarAlumno("María", "González", "987654321", "15/05/1998", "Avenida 456");
agregarAlumno("Pedro", "López", "456789123", "10/10/2002", "Plaza 789");

// Imprimir la lista de alumnos en la consola
console.log(listaAlumnos);

