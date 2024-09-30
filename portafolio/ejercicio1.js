// Función para verificar si un número es par
function isEven(numero) {
    return numero % 2 === 0;
}

// Función para verificar si un número es impar
function isOdd(numero) {
    return numero % 2 !== 0;
}

// Función para manejar la verificación al hacer clic en el botón
function verificarNumero() {
    // Obtener el valor ingresado por el usuario
    let numero = document.getElementById("numeroInput").value;

    // Convertir la entrada a un número entero
    numero = parseInt(numero);

    // Obtener el elemento donde se mostrara el resultado
    let resultadoElemento = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultadoElemento.textContent = "No ingresaste un número válido.";
    } else {
        // Verificar si el número es par o impar
        if (isEven(numero)) {
            resultadoElemento.textContent = "El número " + numero + " es par.";
        } else if (isOdd(numero)) {
            resultadoElemento.textContent = "El número " + numero + " es impar.";
        }
    }
}

// Asociar la función verificarNumero al evento click del botón
document.getElementById("verificarBtn").addEventListener("click", verificarNumero);
