// Solicitar las 3 notas del alumno
let nota1 = parseFloat(prompt("Ingresa la primera nota (40%):"));
let nota2 = parseFloat(prompt("Ingresa la segunda nota (30%):"));
let nota3 = parseFloat(prompt("Ingresa la tercera nota (30%):"));

// Calcular el promedio ponderado
let promedioPonderado = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3);

// Mostrar el promedio
console.log("El promedio ponderado es: " + promedioPonderado.toFixed(2));

// Determinar el estado del estudiante
if (promedioPonderado < 3.95) {
    console.log("El estudiante ha reprobado la asignatura.");
} else if (promedioPonderado >= 3.95 && promedioPonderado < 4.95) {
    console.log("El estudiante debe ir a examen.");
} else if (promedioPonderado >= 4.95) {
    console.log("El estudiante se exime de la asignatura.");
}
