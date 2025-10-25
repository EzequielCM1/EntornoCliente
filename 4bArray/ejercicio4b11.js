"use strict";

// ======================
// FUNCIONES
// ======================

function generarPrimitiva() {
    const numeros = [];

    while (numeros.length < 6) {
        const aleatorio = Math.floor(Math.random() * 49) + 1;
        if (!numeros.includes(aleatorio)) {
            numeros.push(aleatorio);
        }
    }

    mostrarNumeros(numeros);
}

function mostrarNumeros(numeros) {
    const divResultado = document.getElementById("divResultado");
    divResultado.textContent = "Números generados: " + numeros.join(" - ");
}

// ======================
// MAIN
// ======================

const btnGenerar = document.getElementById("btnGenerar");
btnGenerar.addEventListener("click", generarPrimitiva);
