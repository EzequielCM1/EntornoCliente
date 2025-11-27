"use strict";

/////////
// Funciones
let perros = [];

// Constructor de objeto esto deberi estar en otro archivo
function Perro(nombre, edad, raza) {
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
}
Perro.prototype.mostrarDatos = function () {
    return `Perro: ${this.nombre} - Edad: ${this.edad} - Raza: ${this.raza}`;
};

// Función para mostrar HTML
const mostrarHTML = msj => {
    const divLista = document.querySelector("#divResultado");
    divLista.innerHTML = msj;
};

// Mostrar lista en orden de inserción
document.querySelector("#ordenInsercion").addEventListener("click", () => {
    const lista = perros.map(p => `<li>${p.mostrarDatos()}</li>`).join("");
    mostrarHTML("<ul>" + lista + "</ul>");
});

// Añadir nuevo perro
document.querySelector("#add").addEventListener("click", () => {
    const nombrePerro = document.querySelector("#nombre").value.trim();
    const edadPerro = document.querySelector("#edad").valueAsNumber;
    const razaPerro = document.querySelector("#raza").value.trim();

    // if (!nombrePerro || isNaN(edadPerro) || !razaPerro) {
    //     alert("Por favor, completa todos los campos correctamente.");
    //     return;
    // }

    const p = new Perro(nombrePerro, edadPerro, razaPerro);
    perros.push(p);

});

// Ordenar por edad
document.querySelector('#ordenEdad').addEventListener('click', () => {
    const listaOrdenada = [...perros].sort((a, b) => a.edad - b.edad);
    const lista = listaOrdenada.map(p => `<li>${p.mostrarDatos()}</li>`).join("");
    mostrarHTML("<ul>" + lista + "</ul>");
});

// Ordenar por raza
document.querySelector('#ordenRaza').addEventListener('click', () => {
    const listaOrdenada = [...perros].sort((a, b) => a.raza.localeCompare(b.raza));
    const lista = listaOrdenada.map(p => `<li>${p.mostrarDatos()}</li>`).join("");
    mostrarHTML("<ul>" + lista + "</ul>");
});
