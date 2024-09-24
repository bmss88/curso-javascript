// Definición de las tarifas por hora
const tarifaDiurna = 12000;
const tarifaNocturna = 16000;
const incrementoDiurnoDomingo = 2000;
const incrementoNocturnoDomingo = 3000;

// Definición de los turnos y sus respectivas horas
const horasPorTurno = 10;

// Definición de los empleados
const empleados = [
    {
        nombre: "Empleado 1",
        turnos: {
            lunes: "nocturno",
            martes: "nocturno",
            miércoles: "nocturno",
            jueves: "diurno",
            viernes: "diurno"
        },
        pagoDiario: {},
        totalSemanal: 0
    },
    {
        nombre: "Empleado 2",
        turnos: {
            martes: "nocturno",
            miércoles: "nocturno",
            jueves: "nocturno",
            domingo: "diurno"
        },
        pagoDiario: {},
        totalSemanal: 0
    },
    {
        nombre: "Empleado 3",
        turnos: {
            miércoles: "diurno",
            jueves: "diurno",
            viernes: "diurno",
            sábado: "nocturno",
            domingo: "nocturno"
        },
        pagoDiario: {},
        totalSemanal: 0
    }
];

// Función para calcular el pago diario según el turno
function calcularPago(turno, esDomingo = false) {
    if (turno === "diurno") {
        return (esDomingo ? tarifaDiurna + incrementoDiurnoDomingo : tarifaDiurna) * horasPorTurno;
    } else if (turno === "nocturno") {
        return (esDomingo ? tarifaNocturna + incrementoNocturnoDomingo : tarifaNocturna) * horasPorTurno;
    }
    return 0;
}

// Calcular los pagos para cada empleado
empleados.forEach(empleado => {
    let totalSemanal = 0;

    // Recorrer los turnos del empleado
    for (let dia in empleado.turnos) {
        const turno = empleado.turnos[dia];
        const esDomingo = dia === "domingo";
        const pago = calcularPago(turno, esDomingo);

        // Guardar el pago diario
        empleado.pagoDiario[dia] = pago;

        // Sumar al total semanal
        totalSemanal += pago;
    }

    // Asignar el total semanal
    empleado.totalSemanal = totalSemanal;
});

// Mostrar la información de cada empleado
empleados.forEach(empleado => {
    console.log(`${empleado.nombre}:`);
    console.log("Pagos diarios:", empleado.pagoDiario);
    console.log("Total semanal:", empleado.totalSemanal, "CLP");
    console.log("-------------------------------");
});
