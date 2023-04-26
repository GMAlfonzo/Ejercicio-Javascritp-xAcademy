// 1)
function crearPiramide(numero) {
    for (let i = 1; i <= numero; i++){
        let fila = '';
        for(let j = 1; j <= i;j++){
          fila += j;
        };
        console.log(fila);                                      
      };
}

crearPiramide(6);

// 2)
const array1 = ['rojo', 'azul', 'amarillo'];
const array2 = ['blanco', 'negro', 'rojo'];

function interseccionDeArrays(array1, array2){
    const elementosIguales = array1.filter(elemento => {
        return array2.includes(elemento)
    })
    return elementosIguales;
}

console.log(interseccionDeArrays(array1,array2));

// 3)
class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
  
    agregarProducto(nombre, precio, unidades) {
      // Validamos si el producto ya existe en el carrito
      const productoExiste = this.productos.find(
        (p) => p.nombre === nombre
      );
      if (productoExiste) {
        console.log(
          `El producto ${nombre} ya existe en el carrito con ${productoExiste.unidades} unidades`
        );
        return;
      }
  
      // Agregamos el producto al carrito
      const nuevoProducto = new Producto(nombre, precio, unidades)
      this.productos.push(nuevoProducto);
  
      // Actualizamos el monto total del carrito
      this.montoTotal += precio * unidades;
    }
  }
  
  class Producto {
    constructor(nombre, precio, unidades){
        this.nombre = nombre;
        this.precio = precio;
        this.unidades = unidades;
    }
}

  const carrito = new Carrito();
  // Agregamos un producto al carrito
  carrito.agregarProducto("Leche", 5, 1);
  console.log(carrito); 
  // Agregamos otro producto al carrito
  carrito.agregarProducto("Azucar", 3, 2);
  console.log(carrito);
  // Intentamos agregar un producto duplicado al carrito
  carrito.agregarProducto("Leche", 5, 1);
  console.log(carrito);

