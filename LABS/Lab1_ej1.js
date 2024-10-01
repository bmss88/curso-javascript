// Definir una clase para manejar el texto
class Texto {
    constructor(texto) {
        this.texto = texto; // Almacena el texto ingresado
    }

    // Método para contar los caracteres del texto
    contarCaracteres() {
        return this.texto.length;
    }

    // Método para mostrar la información en un alert
    mostrarInformacion() {
        const numeroCaracteres = this.contarCaracteres();
        alert(`La oración ingresada es: "${this.texto}" y tiene ${numeroCaracteres} caracteres.`);
    }
}

// Función para solicitar el texto al usuario
function solicitarTexto() {
    let textoIngresado = prompt("Ingresa una palabra u oración:");
    return textoIngresado;
}

// Función principal que ejecuta el programa
function main() {
    const textoIngresado = solicitarTexto();

    // Verificar si el texto es válido (no vacío)
    if (textoIngresado.trim() === "") {
        alert("No ingresaste una palabra u oración válida.");
    } else {
        // Crear una instancia de la clase Texto
        const texto = new Texto(textoIngresado);

        // Mostrar la información
        texto.mostrarInformacion();
    }
}

// Ejecutar el programa
main();
