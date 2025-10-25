"use strict";

// Array vacío al iniciar
let arrNombres = [];

// Asignar eventos a los botones
document.getElementById("btnAñadir").addEventListener("click", añadir);
document.getElementById("btnMostrar").addEventListener("click", mostrar);
document.getElementById("btnEliminar").addEventListener("click", eliminar);
const resultado = document.getElementById("divResultado");
// Función Añadir
function añadir() {
    const nombre = document.getElementById("txtNombre").value.trim();
    

    if (nombre === "") {
        resultado.innerHTML = "Debes escribir un nombre antes de añadir.";
        return;
    }

    arrNombres.push(nombre);
    resultado.innerHTML = `"${nombre}" ha sido añadido.`;
    document.getElementById("txtNombre").value = "";
}

// Función Mostrar
function mostrar() {

    if (arrNombres.length === 0) {
        resultado.innerHTML = "No hay nada que mostrar.";
        return;
    }

    arrNombres.sort();

    let lista = "<ol>";
    for (let nombre of arrNombres) {
        lista += `<li>${nombre}</li>`;
    }
    lista += "</ol>";

    resultado.innerHTML = lista;
}

// Función Eliminar
function eliminar() {
    const nombre = document.getElementById("txtNombre").value.trim();

    if (arrNombres.length === 0) {
        resultado.innerHTML = "No hay elementos en la lista para eliminar.";
        return;
    }

    if (nombre === "") {
        resultado.innerHTML = "Debes escribir el nombre que deseas eliminar.";
        return;
    }

    const index = arrNombres.indexOf(nombre);

    if (index === -1) {
        resultado.innerHTML = `"${nombre}" no se encuentra en la lista.`;
    } else {
        arrNombres.splice(index, 1);
        resultado.innerHTML = `"${nombre}" ha sido eliminado.`;
    }

    document.getElementById("txtNombre").value = "";
}
