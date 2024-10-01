// Definir una clase para la validación de contraseñas
class ValidadorDeContraseña {
    constructor(contraseña) {
        this.contraseña = contraseña;
        this.errores = []; // Almacenar los mensajes de error
    }

    // Método para verificar la longitud mínima
    verificarLongitudMinima(minimo) {
        if (this.contraseña.length < minimo) {
            this.errores.push(`Debe tener al menos ${minimo} caracteres.`);
        }
    }

    // Método para verificar si contiene al menos una letra mayúscula
    verificarMayuscula() {
        const regexMayuscula = /[A-Z]/;
        if (!regexMayuscula.test(this.contraseña)) {
            this.errores.push("Debe contener al menos una letra mayúscula.");
        }
    }

    // Método para verificar si contiene al menos un número
    verificarNumero() {
        const regexNumero = /[0-9]/;
        if (!regexNumero.test(this.contraseña)) {
            this.errores.push("Debe contener al menos un número.");
        }
    }

    // Método para verificar si contiene al menos un carácter especial
    verificarEspecial() {
        const regexEspecial = /[!@#$%^&*()_+\-{}\[\]:;<>.,?~\\]/;
        if (!regexEspecial.test(this.contraseña)) {
            this.errores.push("Debe contener al menos un carácter especial.");
        }
    }

    // Método para validar la contraseña basándose en todos los criterios
    validarContraseña() {
        this.verificarLongitudMinima(8);
        this.verificarMayuscula();
        this.verificarNumero();
        this.verificarEspecial();
    }

    // Método para obtener los errores o mostrar un mensaje de éxito
    mostrarResultado() {
        if (this.errores.length > 0) {
            alert("La contraseña no cumple con los siguientes requisitos:\n" + this.errores.join("\n"));
        } else {
            alert("¡La contraseña es válida!");
        }
    }
}

// Función para solicitar la contraseña
function solicitarContraseña() {
    let contraseña = prompt("Ingresa una contraseña:");
    return contraseña;
}

// Función principal que ejecuta el programa
function main() {
    let password = solicitarContraseña();

    // Verificar si el usuario ingresó una contraseña vacía
    if (!password || password.trim() === "") {
        alert("No ingresaste ninguna contraseña.");
    } else {
        // Crear una instancia de la clase ValidadorDeContraseña
        const validador = new ValidadorDeContraseña(password);

        // Validar la contraseña
        validador.validarContraseña();

        // Mostrar el resultado
        validador.mostrarResultado();
    }
}

// Ejecutar el programa
main();
