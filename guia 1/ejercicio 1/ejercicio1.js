// Función para calcular el área de un círculo
function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

// Función para calcular el área de un triángulo
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Función para calcular el área de un rectángulo
function areaRectangulo(base, altura) {
    return base * altura;
}

// Ejemplo de uso:
console.log(areaCirculo(5));  // Ejemplo: área de un círculo con radio 5
console.log(areaTriangulo(4, 6));  // Ejemplo: área de un triángulo con base 4 y altura 6
console.log(areaRectangulo(5, 8));  // Ejemplo: área de un rectángulo con base 5 y altura 8
