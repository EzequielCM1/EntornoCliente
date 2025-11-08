"use strict";

// -----------------------------
// Bicicletas iniciales
// -----------------------------
const bicisIniciales = [
    new Carretera("C001", 2023, 3),
    new Carretera("C002", 2022, 2),
    new Montaña("M001", 2024, 2),
    new Montaña("M002", 2021, 1),
    new Bicicleta("B001", 2020),
];

let miTienda = new Tienda(bicisIniciales, 0);

// -----------------------------
// Alta bicicleta
// -----------------------------
function AltaBicicleta() {
    const localizador = document.querySelector("#txtLocalizador").value.trim();
    const anio = document.querySelector("#lstAnio").value;
    const tipo = document.querySelector(`input[name="rbtTipoBicicleta"]:checked`).value;

    if (!localizador || !anio || !tipo) {
        alert("Debes rellenar todos los campos");
        return;
    }

    let nuevaBici;
    if (tipo === "carretera") {
        const numPlatos = document.querySelector("#txtPlatos").value.trim();
        if (!numPlatos) return alert("Falta número de platos");
        nuevaBici = new Carretera(localizador, anio, numPlatos);
    } else {
        const numSusp = document.querySelector("#txtSuspensiones").value.trim();
        if (!numSusp) return alert("Falta número de suspensiones");
        nuevaBici = new Montaña(localizador, anio, numSusp);
    }

    const resultado = miTienda.altaBicicleta(nuevaBici);
    alert(resultado ? "Alta bicicleta OK" : "Bicicleta registrada previamente");

    document.querySelector('form[name="frmAltaBicicleta"]').style.display = "none";
    refrescarTotales();
}

// -----------------------------
// Venta bicicleta
// -----------------------------
function VentaBicicleta() {
    const localizador = document.querySelector("#txtLocalizadorVenta").value.trim();
    if (!localizador) return alert("Debes introducir el localizador");

    const resultado = miTienda.ventaBici(localizador);
    if (resultado === "NO_EXISTE") alert("La bicicleta no existe");
    else if (resultado === "YA_VENDIDA") alert("Bicicleta ya vendida");
    else alert("Bicicleta vendida");

    document.querySelector('form[name="frmVentaBicicleta"]').style.display = "none";
    refrescarTotales();
}

// -----------------------------
// Refrescar totales
// -----------------------------
function refrescarTotales() {
    document.querySelector("#totales").innerHTML = `
        <h3>Bicicletas de carretera: ${miTienda.numCarretera()}</h3>
        <h3>Bicicletas de montaña: ${miTienda.numMontaña()}</h3>
        <h3>Total de bicicletas: ${miTienda.numTotal()}</h3>
        <h3>Total de ventas: ${miTienda.numVenta()}</h3>
    `;
}

// -----------------------------
// Mostrar/Ocultar formularios
// -----------------------------
function mostrarAlta() {
    document.querySelector('form[name="frmAltaBicicleta"]').style.display = "block";
    document.querySelector('form[name="frmVentaBicicleta"]').style.display = "none";
}

function mostrarVenta() {
    document.querySelector('form[name="frmAltaBicicleta"]').style.display = "none";
    document.querySelector('form[name="frmVentaBicicleta"]').style.display = "block";
}

function mostrarTotales() {
    refrescarTotales();
    document.querySelector("#totales").style.display = "block";
}

function mostrarListado() {
    const listadoDiv = document.querySelector("#listado");
    listadoDiv.innerHTML = `
        <h3>Bicicletas de carretera</h3>
        <table class="table table-bordered text-center">
            <tr><th>Localizador</th><th>Año</th><th>Vendida</th><th>Platos</th></tr>
            ${miTienda.listadoCarretera()}
        </table>

        <h3>Bicicletas de montaña</h3>
        <table class="table table-bordered text-center">
            <tr><th>Localizador</th><th>Año</th><th>Vendida</th><th>Suspensiones</th></tr>
            ${miTienda.listadoMontania()}
        </table>
    `;
}

// -----------------------------
// Eventos
// -----------------------------
document.querySelector("#btnMostrarAlta").addEventListener("click", mostrarAlta);
document.querySelector("#btnMostrarVenta").addEventListener("click", mostrarVenta);
document.querySelector("#btnMostrarTotales").addEventListener("click", mostrarTotales);
document.querySelector("#btnMostrarListado").addEventListener("click", mostrarListado);
document.querySelector("#btnAltaBicicleta").addEventListener("click", AltaBicicleta);
document.querySelector("#btnVentaBicicleta").addEventListener("click", VentaBicicleta);

// Ocultar formularios al inicio
document.querySelector('form[name="frmAltaBicicleta"]').style.display = "none";
document.querySelector('form[name="frmVentaBicicleta"]').style.display = "none";

// 🔹 Mostrar totales y listado al cargar la página
window.addEventListener("DOMContentLoaded", () => {
    refrescarTotales();
    mostrarListado();
});
