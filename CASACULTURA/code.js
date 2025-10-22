"use strict";

function validar() {
    const txtnombre = document.querySelector('#txtnombre');
    const txtedad = document.querySelector("#txtedad");
    const txtturno = document.querySelector("#txtturno");
    const txtcontraseña = document.querySelector("#txtcontraseña");
    const txtverificar = document.querySelector("#txtverificarC");

    // Recuperar valores
    const nombre = txtnombre.value.trim();
    const edad = txtedad.valueAsNumber;
    const turno = txtturno.value.trim();
    const contraseña = txtcontraseña.value;
    const verificar = txtverificar.value;

    let errores = "";

    // Validar campos vacíos
    if (nombre === "" || isNaN(edad) || turno === "") {
        errores += "<p>Debes rellenar todos los campos.</p>";
    }

    // Validar longitud del nombre
    if (nombre.length > 20) {
        errores += "<p>El nombre no puede ocupar más de 20 caracteres.</p>";
    }

    // Validar edad
    if (isNaN(edad)) {
        errores += "<p>Debes introducir una edad válida.</p>";
    } else if (edad < 18 || edad > 67) {
        errores += "<p>La edad debe estar entre 18 y 67.</p>";
    }

    // Validar turno
    if (turno !== "Mañana" && turno !== "Tarde") {
        errores += "<p>Debe escribir Mañana o Tarde (con la primera mayúscula).</p>";
    }

    // Validar contraseña
    if (contraseña.length < 6 || contraseña !== verificar) {
        errores += "<p>La contraseña debe tener al menos 6 caracteres y coincidir.</p>";
    }

    // Mostrar errores o mensaje válido
    const divErrores = document.querySelector("#errores");
    if (errores !== "") {
        divErrores.innerHTML = errores;
        divErrores.style.color = "red";
    } else {
        divErrores.innerHTML = "<p>Formulario válido ✅</p>";
        divErrores.style.color = "green";
    }
}

// Evento botón
const btnvalidar = document.querySelector("#btnvalidar");
btnvalidar.addEventListener("click", validar);
