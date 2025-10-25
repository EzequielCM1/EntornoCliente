"use strict";

// ======================
// FUNCIONES
// ======================

function tr(mensaje, a, b) {
    let arrayMensaje = mensaje.split("");

    for (let i = 0; i < arrayMensaje.length; i++) {
        if (arrayMensaje[i] === a) {
            arrayMensaje[i] = b;
        }
    }

    mensaje = arrayMensaje.join("");
    return mensaje;
}

function aplicarTr() {
    const mensaje = document.getElementById("txtMensaje").value.trim();
    const a = document.getElementById("txtA").value.trim();
    const b = document.getElementById("txtB").value.trim();
    const divResultado = document.getElementById("divResultado");

    divResultado.innerHTML = "";

    if (mensaje === "" || a === "" || b === "") {
        divResultado.textContent = "Por favor, completa todos los campos.";
        return;
    }

    const resultado = tr(mensaje, a, b);
    divResultado.textContent = `Resultado: ${resultado}`;
}

// ======================
// MAIN
// ======================

const btnCambiar = document.getElementById("btnCambiar");
btnCambiar.addEventListener("click", aplicarTr);
