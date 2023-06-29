// 1. Filtrar los productos que tienen una cantidad menor o igual a 5.
// 2. Duplicar la cantidad de los productos restantes.
// 3. Calcular el valor total de *todo* el inventario original.
// 4. Filtrar los productos cuyo valor total sea mayor o igual a 100.
//  Investigar sobre las funciones de arrays "find, some, every" para:
// 6. Encontrar un producto que contenga la "ca" en su nombre
// 7. Encontrar el producto mas caro (pista: usar funciones map y Math.max)
// 8. Averiguar si todos los articulos tienen al menos 2 colores disponibles
// 9. Averiguar si al menos 1 articulo cuesta mas de 100

const inventario = [
    {
        nombre: "Remera",
        cantidad: 10,
        precio: 150,
        coloresDisponibles: ["rojo", "azul"],
    },
    {
        nombre: "Pantalón",
        cantidad: 5,
        precio: 30,
        coloresDisponibles: ["negro", "gris"],
    },
    {
        nombre: "Zapatos",
        cantidad: 3,
        precio: 50,
        coloresDisponibles: ["blanco", "marrón"],
    },
    {
        nombre: "Camisa",
        cantidad: 20,
        precio: 5,
        coloresDisponibles: ["negro", "blanco", "azul"],
    },
];

// 1. Filtrar los productos que tienen una cantidad menor o igual a 5.
const productosCantidadBaja = inventario.filter(producto => producto.cantidad <= 5);
console.log("Productos con cantidad menor o igual a 5:", productosCantidadBaja);

// 2. Duplicar la cantidad de los productos restantes.
const productosDuplicados = inventario.map(producto => ({ ...producto, cantidad: producto.cantidad * 2 }));
console.log("Productos con cantidad duplicada:", productosDuplicados);

// 3. Calcular el valor total de todo el inventario original.
const valorTotalInventario = inventario.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0);
console.log("Valor total del inventario:", valorTotalInventario);

// 4. Filtrar los productos cuyo valor total sea mayor o igual a 100.
const productosValorAlto = inventario.filter(producto => (producto.cantidad * producto.precio) >= 100);
console.log("Productos con valor total mayor o igual a 100:", productosValorAlto);

// 6. Encontrar un producto que contenga "ca" en su nombre 
const productoConCa = inventario.find(producto => producto.nombre.toLowerCase().includes("ca"));
console.log("Producto que contiene 'ca' en su nombre:", productoConCa);

// 7. Encontrar el producto más caro.
const productoMasCaro = inventario.reduce((producto1, producto2) => (producto1.precio > producto2.precio) ? producto1 : producto2);
console.log("Producto más caro:", productoMasCaro);

// 8. Averiguar si todos los artículos tienen al menos 2 colores disponibles.
const todosConDosColores = inventario.every(producto => producto.coloresDisponibles.length >= 2);
console.log("Todos los artículos tienen al menos 2 colores disponibles:", todosConDosColores);

// 9. Averiguar si al menos 1 artículo cuesta más de 100.
const algunoCuestaMasDe100 = inventario.some(producto => producto.precio > 100);
console.log("Al menos 1 artículo cuesta más de 100:", algunoCuestaMasDe100);
