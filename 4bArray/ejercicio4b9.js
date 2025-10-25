"use strict";


// ======================
// FUNCIONES
// ======================

function agregarPalabra() {
    const palabra = inputPalabra.value.trim();

    if (palabra === "") {
        alert("Por favor, ingresa una palabra.");
        return;
    }

    palabras.push(palabra);
    mostrarResultados();
    inputPalabra.value = "";
    inputPalabra.focus();
}

function mostrarResultados() {
    document.getElementById("primera").textContent = palabras[0];
    document.getElementById("ultima").textContent = palabras[palabras.length - 1];
    document.getElementById("cantidad").textContent = palabras.length;
    document.getElementById("ordenadas").textContent = palabras.slice().sort().join(", ");
}

// ======================
// MAIN
// ======================

const palabras = [];
const inputPalabra = document.getElementById("inputPalabra");
const btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", agregarPalabra);
