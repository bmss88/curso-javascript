// Asegurarse de que el DOM esté completamente cargado antes de asociar los eventos
document.addEventListener("DOMContentLoaded", function() {
    // Función para calcular el promedio ponderado y determinar la condicion del estudiante
    function calcularPromedio() {
        // Obtener las notas ingresadas por el usuario
        let nota1 = parseFloat(document.getElementById("nota1").value);
        let nota2 = parseFloat(document.getElementById("nota2").value);
        let nota3 = parseFloat(document.getElementById("nota3").value);

        // Verificar que las notas ingresadas sean números válidos
        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            alert("Por favor, ingresa numeros válidos para todas las notas.");
            return;
        }

        // Calcular el promedio ponderado
        let promedioPonderado = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3);

        // Obtener el elemento donde se mostrará el resultado
        let resultadoElemento = document.getElementById("resultado");

        // Determinar la condicion del estudiante y mostrar el resultado
        if (promedioPonderado < 3.95) {
            resultadoElemento.textContent = "El promedio ponderado es: " + promedioPonderado.toFixed(2) + ". El estudiante ha reprobado la asignatura.";
        } else if (promedioPonderado >= 3.95 && promedioPonderado < 4.95) {
            resultadoElemento.textContent = "El promedio ponderado es: " + promedioPonderado.toFixed(2) + ". El estudiante debe ir a examen.";
        } else if (promedioPonderado >= 4.95) {
            resultadoElemento.textContent = "El promedio ponderado es: " + promedioPonderado.toFixed(2) + ". El estudiante se exime de la asignatura.";
        }
    }

    // Asociar la función calcularPromedio al evento click del botón
    document.getElementById("calcularBtn").addEventListener("click", calcularPromedio);
});
