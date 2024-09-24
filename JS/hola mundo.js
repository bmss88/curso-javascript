console.log("Hola Mundo");
console.log("Hola Mundo JavaScript");

// mensaje 
alert("Hola Mundo JavaScript");
// Solicitar al usuario que ingrese una cadena de texto
let texto = prompt("Introduce una cadena de texto: ").toLowerCase();

// Inicializar contadores para cada vocal
let conteoA = 0, conteoE = 0, conteoI = 0, conteoO = 0, conteoU = 0;

// Recorrer cada caracter de la cadena
for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];
