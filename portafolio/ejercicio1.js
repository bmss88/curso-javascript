// main.js

// Función para verificar si un número es par
function isEven(number) {
    return number % 2 === 0;
}

// Función para verificar si un número es impar
function isOdd(number) {
    return number % 2 !== 0;
}

// Solicitar al usuario que ingrese un número
let numero = prompt("Ingresa un número:");

// Convertir la entrada a un número entero
numero = parseInt(numero);

if (isNaN(numero)) {
    console.log("No ingresaste un número válido.");
} else {
    // Verificar si el número es par o impar
    if (isEven(numero)) {
        console.log("El número " + numero + " es par.");
    } else if (isOdd(numero)) {
        console.log("El número " + numero + " es impar.");
    }
}
