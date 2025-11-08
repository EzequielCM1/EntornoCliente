"use strict";

// Creamos la tienda
const tienda = new Tienda();

// Evento Alta bicicleta
document.querySelector("#btnAltaBicicleta").addEventListener("click", function () {
    const loc = document.querySelector("#txtLocalizador").value.trim();
    const año = document.querySelector("#lstAnio").value;
    const tipo = document.querySelector("input[name='rbtTipoBicicleta']:checked").value;
    const susp = document.querySelector("#txtSuspensiones").value.trim();
    const platos = document.querySelector("#txtPlatos").value.trim();

    if (!loc || !año || (tipo === "carretera" && !platos) || (tipo === "montana" && !susp)) {
        alert("⚠️ Todos los campos son obligatorios.");
        return;
    }

    let bici;
    if (tipo === "carretera") {
        bici = new Carretera(loc, año, false, platos);
    } else {
        bici = new Montaña(loc, año, false, susp);
    }

    if (tienda.altaBicicleta(bici)) {
        alert("✅ Alta bicicleta OK");
    } else {
        alert("❌ Bicicleta registrada previamente");
    }
});

// Evento Venta bicicleta
document.querySelector("#btnVentaBicicleta").addEventListener("click", function () {
    const loc = document.querySelector("#txtLocalizadorVenta").value.trim();

    if (!loc) {
        alert("Introduce un localizador.");
        return;
    }

    const resultado = tienda.ventaBici(loc);

    if (resultado === "NO_EXISTE") alert("❌ La bicicleta no existe");
    else if (resultado === "YA_VENDIDA") alert("⚠️ Bicicleta ya vendida");
    else alert("✅ Bicicleta vendida");
});

// Totales
document.querySelector("#btnMostrarTotales").addEventListener("click", function () {
    document.querySelector("#totales").innerHTML = `
        <h3>Bicicletas de carretera: ${tienda.numCarretera()} </h3>
        <h3>Bicicletas de montaña: ${tienda.numMontaña()} </h3>
        <h3>Total de bicicletas: ${tienda.numTotal()} </h3>
        <h3>Total de ventas: ${tienda.numVenta()} </h3>
    `;
});
