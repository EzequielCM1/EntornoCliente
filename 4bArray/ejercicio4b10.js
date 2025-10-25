"use strict";

// ======================
// FUNCIONES
// ======================

function convertirNumero() {
    const numero = inputNumero.value.trim();

    if (numero === "" || isNaN(numero)) {
        alert("Por favor, introduce un número válido.");
        return;
    }

    if (numero.length > 5) {
        alert("El número debe tener como máximo 5 cifras.");
        return;
    }

    const digitos = numero.split("").map(Number);
    mostrarTabla(digitos);
}

function mostrarTabla(digitos) {
    const nombres = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const tbody = document.querySelector("#tablaResultado tbody");
    tbody.innerHTML = "";

    digitos.forEach(digito => {
        const fila = document.createElement("tr");

        const celdaNumero = document.createElement("td");
        celdaNumero.textContent = digito;

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = nombres[digito];

        fila.appendChild(celdaNumero);
        fila.appendChild(celdaNombre);
        tbody.appendChild(fila);
    });
}

// ======================
// MAIN
// ======================

const inputNumero = document.getElementById("inputNumero");
const btnConvertir = document.getElementById("btnConvertir");

btnConvertir.addEventListener("click", convertirNumero);
