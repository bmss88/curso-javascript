// Inicializa las variables
let suma = 0;
let numeroCreciente = 500; // Primer numero del patron creciente
let numeroDecreciente = 456; // Primer numero del patron decreciente

// Bucle para el patron creciente
while (numeroCreciente <= 800) {
    suma += numeroCreciente;
    numeroCreciente += 10; // Incremento de 10 en cada paso
}

// Bucle para el patron decreciente
while (numeroDecreciente >= 0) {
    suma += numeroDecreciente;
    numeroDecreciente -= 2; // Decremento de 2 en cada paso
}

// Imprimir el resultado de la sumatoria
console.log("El resultado de la sumatoria es: " + suma);
