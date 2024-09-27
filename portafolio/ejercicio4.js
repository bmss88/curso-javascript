// Definicion de las tarifas por hora
const tarifaDiurna = 12000;
const tarifaNocturna = 16000;
const incrementoDiurnoDomingo = 2000;
const incrementoNocturnoDomingo = 3000;

// Definicion de los turnos y sus respectivas horas
const horasPorTurno = 10;

// Definicion de los empleados
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

// Agrega una nueva propiedad a cada empleado para verificar el tipo de datos
empleados.forEach(empleado => {
    empleado.tipoDeDatos = {
        nombre: typeof empleado.nombre,
        turnos: typeof empleado.turnos,
        pagoDiario: typeof empleado.pagoDiario,
        totalSemanal: typeof empleado.totalSemanal
    };
});

// Funcion que calcula el pago diario según el turno
function calcularPago(turno, esDomingo = false) {
    if (turno === "diurno") {
        return (esDomingo ? tarifaDiurna + incrementoDiurnoDomingo : tarifaDiurna) * horasPorTurno;
    } else if (turno === "nocturno") {
        return (esDomingo ? tarifaNocturna + incrementoNocturnoDomingo : tarifaNocturna) * horasPorTurno;
    }
    return 0;
}

// Calcula los pagos para cada empleado
empleados.forEach(empleado => {
    let totalSemanal = 0;

    // Recorre los turnos del empleado
    for (let dia in empleado.turnos) {
        const turno = empleado.turnos[dia];
        const esDomingo = dia === "domingo";
        const pago = calcularPago(turno, esDomingo);

        // Guarda el pago diario
        empleado.pagoDiario[dia] = pago;

        // Suma el total semanal
        totalSemanal += pago;
    }

    // Actualiza el total semanal
    empleado.totalSemanal = totalSemanal;
});

// Muestra la informacion de cada empleado
empleados.forEach(empleado => {
    console.log(`${empleado.nombre}:`);
    console.log("Pagos diarios:", empleado.pagoDiario);
    console.log("Total semanal:", empleado.totalSemanal, "CLP");
    console.log("Tipo de datos:", empleado.tipoDeDatos);
    console.log("-------------------------------");
});
