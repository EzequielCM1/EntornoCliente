"use strict";

// ===============================
// FUNCIONES
// ===============================

// Función para añadir nombres y apellidos
function añadir() {
    const nombre = document.getElementById("txtNombre").value.trim();
    const apellido = document.getElementById("txtApellido").value.trim();
    const divErrores = document.getElementById("errores");
    const divResultado = document.getElementById("resultado");

    // Limpiar mensajes anteriores
    divErrores.innerHTML = "";
    divResultado.innerHTML = "";

    // Comprobación de campos vacíos
    if (nombre === "" && apellido === "") {
        divErrores.innerHTML = "Debes introducir al menos un nombre o un apellido.";
        return;
    }

    // Añadir nombre si existe
    if (nombre !== "") {
        arrNombres.push(nombre);
    }

    // Añadir apellido si existe
    if (apellido !== "") {
        arrApellidos.push(apellido);
    }

    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
}

// Función para generar un nombre aleatorio
function generar() {
    const divErrores = document.getElementById("errores");
    const divResultado = document.getElementById("resultado");

    // Limpiar mensajes anteriores
    divErrores.innerHTML = "";
    divResultado.innerHTML = "";

    // Comprobar que hay nombres y apellidos disponibles
    if (arrNombres.length === 0 || arrApellidos.length === 0) {
        divErrores.innerHTML = "Debe haber al menos un nombre y un apellido para generar un nombre falso.";
        return;
    }

    // Calcular índices aleatorios
    const numNombre = Math.floor(Math.random() * arrNombres.length);
    const numApellido = Math.floor(Math.random() * arrApellidos.length);

    // Recuperar nombre y apellido aleatorios
    const nombreAleatorio = arrNombres[numNombre];
    const apellidoAleatorio = arrApellidos[numApellido];

    // Mostrar el nombre generado
    divResultado.innerHTML = `Nombre generado: ${nombreAleatorio} ${apellidoAleatorio}`;
}

// ===============================
// MAIN
// ===============================

// Arrays vacíos para nombres y apellidos
let arrNombres = [];
let arrApellidos = [];

// Asignar eventos a los botones
document.getElementById("btnAñadir").addEventListener("click", añadir);
document.getElementById("btnGenerar").addEventListener("click", generar);
