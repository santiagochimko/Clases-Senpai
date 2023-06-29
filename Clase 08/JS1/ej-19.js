//Ejercicio 18

const monedasDe10Disponibles = 30;
const monedasDe5Disponibles = 50;

const valorProducto = parseInt(prompt("Ingrese el valor del producto (múltiplo de 5): "));
const dineroEntregado = parseInt(prompt("Ingrese el dinero entregado en la maquina: "));

const cambio = dineroEntregado - valorProducto;

let monedasDe10 = 0;
let monedasDe5 = 0;

if (cambio < 0) {
  document.write("No hay cambio suficiente.");
} else {
  if (cambio >= 10) {
    monedasDe10 = Math.min(Math.floor(cambio / 10), monedasDe10Disponibles);
    cambio -= monedasDe10 * 10;
  }

  if (cambio >= 5) {
    monedasDe5 = Math.min(Math.floor(cambio / 5), monedasDe5Disponibles);
    cambio -= monedasDe5 * 5;
  }

  if (cambio === 0) {
    document.write("Monedas de 10 a entregar: " + monedasDe10 + "<br>");
    document.write("Monedas de 5 a entregar: " + monedasDe5);
  } else {
    document.write("No hay cambio suficiente.");
  }
}
