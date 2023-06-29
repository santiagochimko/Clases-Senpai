function agregarTarea() {
  const nuevaTarea = prompt("Cual es la tarea a agregar");

  //Creo el nuevo li para la tarea
  const nuevoItem = document.createElement("li");
  nuevoItem.innerText = nuevaTarea + " ";
const nuevoSpan = document.createElement("span");
const nuevoBotonEliminar = document.createElement("button");
nuevoBotonEliminar.innerText = "X";
nuevoBotonEliminar.classList.add("eliminar");
nuevoBotonEliminar.onclick = function(){
    eliminarTarea(nuevoBotonEliminar);
}

nuevoSpan.appendChild(nuevoBotonEliminar);
nuevoItem.appendChild(nuevoSpan);
  
  console.log("nuevoItem", nuevoItem);

  //Consigo el ul y agrego el nuevo li
  const ul = document.getElementById("lista-tareas");
  ul.appendChild(nuevoItem);
}

function eliminarTarea(botonPresionado) {
  const liABorrar = botonPresionado.parentNode.parentNode;
  const ul = liABorrar.parentNode;
  ul.removeChild(liABorrar);
}
