// Inicializar variables
let suma = 0;
let numero = 500; // Primer número de la secuencia

// Bucle para recorrer la secuencia
while (numero <= 800) {
    // Agregar el número actual a la suma
    suma += numero;

    // Alternar entre sumar y restar 56
    if (numero % 112 === 0) {  // Esto asegura que se alternen los valores correctamente
        numero += 56;
    } else {
        numero -= 56;
    }
}

// Imprimir el resultado de la sumatoria
console.log("El resultado de la sumatoria es: " + suma);
