"use strict";
// ===============================
// FUNCIONES
// ===============================

// Función para agregar una cuenta
function agregarCuenta() {
    const numCuenta = parseInt(document.getElementById("numCuenta").value.trim());
    const nombreCliente = document.getElementById("nombreCliente").value.trim();
    const saldo = parseFloat(document.getElementById("saldo").value.trim());
    const divErrores = document.getElementById("errores");
    const divResultado = document.getElementById("resultado");

    divErrores.innerHTML = "";
    divResultado.innerHTML = "";

    // Validar campos vacíos
    if (isNaN(numCuenta) || nombreCliente === "" || isNaN(saldo)) {
        divErrores.innerHTML = "Debes rellenar todos los campos correctamente.";
        return;
    }

    // Comprobar fin de ingreso
    if (numCuenta < 0) {
        divErrores.innerHTML = "Ingreso de datos finalizado.";
        ingresoFinalizado = true;
        return;
    }

    // Agregar cuenta al array principal
    const cuenta = [numCuenta, nombreCliente, saldo];
    cuentas.push(cuenta);

    // Limpiar campos
    document.getElementById("numCuenta").value = "";
    document.getElementById("nombreCliente").value = "";
    document.getElementById("saldo").value = "";
}

// Función para mostrar resultados
function mostrarResultados() {
    const divErrores = document.getElementById("errores");
    const divResultado = document.getElementById("resultado");

    divErrores.innerHTML = "";
    divResultado.innerHTML = "";

    if (cuentas.length === 0) {
        divErrores.innerHTML = "No hay cuentas registradas.";
        return;
    }

    let totalAcreedores = 0;
    let tabla = "<table><tr><th>Nº Cuenta</th><th>Cliente</th><th>Saldo</th><th>Estado</th></tr>";

    for (let cuenta of cuentas) {
        const [numCuenta, nombreCliente, saldo] = cuenta;
        let estado = "";

        if (saldo > 0) {
            estado = "Acreedor";
            totalAcreedores += saldo;
        } else if (saldo < 0) {
            estado = "Deudor";
        } else {
            estado = "Nulo";
        }

        tabla += `<tr>
                    <td>${numCuenta}</td>
                    <td>${nombreCliente}</td>
                    <td>${saldo.toFixed(2)}</td>
                    <td>${estado}</td>
                  </tr>`;
    }

    tabla += "</table>";
    tabla += `<p><strong>Total saldos acreedores:</strong> ${totalAcreedores.toFixed(2)}</p>`;

    divResultado.innerHTML = tabla;
}

// ===============================
// MAIN
// ===============================

let cuentas = [];
let ingresoFinalizado = false;

// Asignar eventos
document.getElementById("btnAgregar").addEventListener("click", () => {
    if (!ingresoFinalizado) {
        agregarCuenta();
    } else {
        document.getElementById("errores").innerHTML = "No se pueden añadir más cuentas. El ingreso ha finalizado.";
    }
});

document.getElementById("btnMostrar").addEventListener("click", mostrarResultados);
