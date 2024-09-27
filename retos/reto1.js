// Solicitar al usuario que ingrese una palabra
let texto = prompt("Introduce una palabra: ").toLowerCase();

// Inicia contadores para cada vocal
let conteoA = 0, conteoE = 0, conteoI = 0, conteoO = 0, conteoU = 0;

// Recorrer la cadena de texto
for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];

    // Verificar si el carácter es una vocal y aumentar su contador
    if (caracter === 'a') {
        conteoA++;
    } else if (caracter === 'e') {
        conteoE++;
    } else if (caracter === 'i') {
        conteoI++;
    } else if (caracter === 'o') {
        conteoO++;
    } else if (caracter === 'u') {
        conteoU++;
    }
}

// Mostrar la cantidad de cada vocal
document.write(`<p>La vocal 'a' aparece ${conteoA} veces.</p>`);
document.write(`<p>La vocal 'e' aparece ${conteoE} veces.</p>`);
document.write(`<p>La vocal 'i' aparece ${conteoI} veces.</p>`);
document.write(`<p>La vocal 'o' aparece ${conteoO} veces.</p>`);
document.write(`<p>La vocal 'u' aparece ${conteoU} veces.</p>`);
