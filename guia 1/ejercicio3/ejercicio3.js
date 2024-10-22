class Trabajador {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Sueldo: $${this.sueldo}`);
    }
}

class Gerente extends Trabajador {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    // Sobrescribir el método para incluir el departamento
    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Sueldo: $${this.sueldo}, Departamento: ${this.departamento}`);
    }
}

// Creación de instancias de Trabajador y Gerente
const trabajador1 = new Trabajador("Ana", 1500);
const gerente1 = new Gerente("Carlos", 2500, "Ventas");

// Mostrar detalles
trabajador1.mostrarDetalles();
gerente1.mostrarDetalles();
