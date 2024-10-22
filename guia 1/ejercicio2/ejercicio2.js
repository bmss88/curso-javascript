class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarDetalles() {
        console.log(`Producto: ${this.nombre}, Precio: $${this.precio}`);
    }
}

// Creación de instancias de la clase Producto
const producto1 = new Producto("Laptop", 1200);
const producto2 = new Producto("Smartphone", 800);

// Invocación del método para mostrar los detalles
producto1.mostrarDetalles();
producto2.mostrarDetalles();
