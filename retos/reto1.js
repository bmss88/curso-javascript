// ingresar una cadena de texto
let texto = prompt("Introduce vocales: ").toLowerCase();

// inicia contadores para vocales
let conteoA = 0, conteoE = 0, conteoI = 0, conteoO = 0, conteoU = 0;

// recorrer  la cadena
for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];
    
// verificar si es vocal
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

// Muestra cantidad de vocales
console.log(`vocal 'a' esta ${conteoA} veces.`);
console.log(`vocal 'e' esta ${conteoE} veces.`);
console.log(`vocal 'i' esta ${conteoI} veces.`);
console.log(`vocal 'o' esta ${conteoO} veces.`);
console.log(`vocal 'u' esta ${conteoU} veces.`);