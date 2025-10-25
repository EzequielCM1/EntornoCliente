"use strict";

// ======================
// DATOS Y FUNCIONES
// ======================

let arraygeneral = [
    ['Juan',   ['Granada', 'Londres', 'Roma']],
    ['Ana',    ['Bilbao', 'Sevilla', 'Roma']],
    ['Manuel', ['Granada', 'Paris', 'Londres', 'Roma']],
    ['Antonio',['Granada', 'Sevilla', 'Bilbao']],
    ['Elena',  ['Granada', 'Sevilla']],
    ['Jorge',  ['Sevilla']]
];

function cargarPersonas() {
    const select = document.getElementById("selectPersona");

    arraygeneral.forEach(([nombre]) => {
        const option = document.createElement("option");
        option.value = nombre;
        option.textContent = nombre;
        select.appendChild(option);
    });
}

function mostrarCiudades() {
    const select = document.getElementById("selectPersona");
    const divResultado = document.getElementById("divResultado");
    divResultado.innerHTML = "";

    const personaSeleccionada = select.value;
    if (personaSeleccionada === "") {
        divResultado.textContent = "Por favor, selecciona una persona.";
        return;
    }

    const persona = arraygeneral.find(([nombre]) => nombre === personaSeleccionada);
    if (persona) {
        const [nombre, ciudades] = persona;
        const lista = document.createElement("ul");
        ciudades.forEach(ciudad => {
            const li = document.createElement("li");
            li.textContent = ciudad;
            lista.appendChild(li);
        });

        divResultado.innerHTML = `<h3>${nombre} viajará a:</h3>`;
        divResultado.appendChild(lista);
    }
}

// ======================
// MAIN
// ======================

cargarPersonas();
document.getElementById("selectPersona").addEventListener("change", mostrarCiudades);
