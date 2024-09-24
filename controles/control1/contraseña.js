// función verifica los criterios de seguridad
function verificarContraseña(contraseña) {
    let errores = [];

    if (contraseña.length < 8) {
        errores.push("- Al menos 8 caracteres de longitud");
    }
    if (!/[A-Z]/.test(contraseña)) {
        errores.push("- Al menos una letra mayúscula");
    }
    if (!/[0-9]/.test(contraseña)) {
        errores.push("- Al menos un número");
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-]/.test(contraseña)) {
        errores.push("- Al menos un carácter especial como !@#$%^&*()_+{}[]:;<>,.?~\\-");
    }

    return errores;
}

// Variable para controlar la validez de la contraseña
let esValida = false;
let contraseña;

// Bucle que solicita una contraseña que sea valida
while (!esValida) {
    // Solicitar al usuario que ingrese una contraseña
    contraseña = prompt("Ingresa una contraseña:");

    // Verificar si la contraseña cumple con los criterios de seguridad
    let errores = verificarContraseña(contraseña);

    // Si la contraseña no es válida, muestra solo los criterios que faltan
    if (errores.length > 0) {
        alert("La contraseña no es válida. Faltan los siguientes criterios:\n" + errores.join("\n"));
    } else {
        esValida = true;
    }
}

// Muestra un mensaje en el navegador cuando la contraseña es válida
document.write("La contraseña es válida.");
