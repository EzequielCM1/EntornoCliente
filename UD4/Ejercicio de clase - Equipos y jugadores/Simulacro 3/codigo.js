"use strict";

// ====================
// LISTAS GLOBALES
// ====================
let listaJugadores = [];
let listaEntrenadores = [];
let listaEquipos = [];

// ====================
// DATOS PREDEFINIDOS
// ====================

// Entrenadores
const entrenador1 = new Entrenador("E01", "Carlos Martínez", "carlos@deporte.com");
const entrenador2 = new Entrenador("E02", "Laura Gómez", "laura@deporte.com");
const entrenador3 = new Entrenador("E03", "Pedro Sánchez", "pedro@deporte.com");
listaEntrenadores.push(entrenador1, entrenador2, entrenador3);

// Jugadores
const jugador1 = new Jugador("J01", "Luis Fernández", "Delantero", 9);
const jugador2 = new Jugador("J02", "Miguel Ruiz", "Portero", 1);
const jugador3 = new Jugador("J03", "Ana López", "Defensa", 4);
const jugador4 = new Jugador("J04", "Sara Torres", "Centrocampista", 8);
const jugador5 = new Jugador("J05", "Juan Pérez", "Delantero", 11);
listaJugadores.push(jugador1, jugador2, jugador3, jugador4, jugador5);

// Equipos
const equipo1 = new Equipo("EQ01", "Tigres FC", "Fútbol");
const equipo2 = new Equipo("EQ02", "Águilas Basket", "Baloncesto");
const equipo3 = new Equipo("EQ03", "Rápidos HC", "Hockey");

equipo1.asignarEntrenador(entrenador1);
equipo2.asignarEntrenador(entrenador2);
equipo3.asignarEntrenador(entrenador3);

equipo1.asignarJugador(jugador1);
equipo1.asignarJugador(jugador2);
equipo2.asignarJugador(jugador3);
equipo2.asignarJugador(jugador4);
equipo3.asignarJugador(jugador5);

listaEquipos.push(equipo1, equipo2, equipo3);

// ====================
// FUNCIONES DE REGISTRO
// ====================
function RegistrarEquipo(e) {
    e.preventDefault();
    const idEquipo = document.querySelector("#idEquipo").value;
    const nombreEquipo = document.querySelector("#nombreEquipo").value;
    const deporteEquipo = document.querySelector("#deporteEquipo").value;

    const nuevoEquipo = new Equipo(idEquipo, nombreEquipo, deporteEquipo);
    listaEquipos.push(nuevoEquipo);

    document.querySelector("#formEquipo").reset();
    mostrarMensaje("Equipo registrado correctamente");
    actualizarTablas();
}

function RegistrarEntrenador(e) {
    e.preventDefault();
    const idEntrenador = document.querySelector("#idEntrenador").value;
    const nombreEntrenador = document.querySelector("#nombreEntrenador").value;
    const emailEntrenador = document.querySelector("#emailEntrenador").value;

    const nuevoEntrenador = new Entrenador(idEntrenador, nombreEntrenador, emailEntrenador);
    listaEntrenadores.push(nuevoEntrenador);

    document.querySelector("#formEntrenador").reset();
    mostrarMensaje("Entrenador registrado correctamente");
    actualizarTablas();
}

function RegistrarJugador(e) {
    e.preventDefault();
    const idJugador = document.querySelector("#idJugador").value;
    const nombreJugador = document.querySelector("#nombreJugador").value;
    const posicionJugador = document.querySelector("#posicionJugador").value;
    const dorsalJugador = document.querySelector("#dorsalJugador").value;

    const nuevoJugador = new Jugador(idJugador, nombreJugador, posicionJugador, dorsalJugador);
    listaJugadores.push(nuevoJugador);

    document.querySelector("#formJugador").reset();
    mostrarMensaje("Jugador Registrado correctamente");
    actualizarTablas();
}

function AsignarEntrenador() {
    const idEquipoAsignar = document.querySelector("#idEquipoAsignar").value;
    const idEntrenadorAsignar = document.querySelector("#idEntrenadorAsignar").value;

    const equipo = listaEquipos.find(eq => eq.Id === idEquipoAsignar);
    const entrenador = listaEntrenadores.find(en => en.Id === idEntrenadorAsignar);

    if (!equipo) return alert("El equipo no se encontró");
    if (!entrenador) return alert("El entrenador no se encontró");

    equipo.asignarEntrenador(entrenador);
    mostrarMensaje("Entrenador asignado correctamente");
    actualizarTablas();
}

function AsignarJugador() {
    const idEquipoJugador = document.querySelector("#idEquipoJugador").value;
    const idJugadorAsignar = document.querySelector("#idJugadorAsignar").value;

    const equipo = listaEquipos.find(eq => eq.Id === idEquipoJugador);
    const jugador = listaJugadores.find(ju => ju.Id === idJugadorAsignar);

    if (!equipo) return alert("El equipo no se encontró");
    if (!jugador) return alert("El jugador no se encontró");

    equipo.asignarJugador(jugador);
    mostrarMensaje("Jugador asignado correctamente");
    actualizarTablas();
}

// ====================
// TABLAS
// ====================
function tablaEquipos() {
    let tabla = `
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Deporte</th>
            <th>Entrenador</th>
            <th>Jugadores</th>
        </tr>`;
    listaEquipos.forEach(eq => tabla += eq.tohtmlRow());
    return tabla;
}

function tablaEntrenadores() {
    let tabla = `
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
        </tr>`;
    listaEntrenadores.forEach(en => tabla += en.tohtmlRow());
    return tabla;
}

function tablaJugadores() {
    let tabla = `
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Posición</th>
            <th>Dorsal</th>
        </tr>`;
    listaJugadores.forEach(ju => tabla += ju.tohtmlRow());
    return tabla;
}

function actualizarTablas() {
    document.querySelector("#tablaEquipos").innerHTML = tablaEquipos();
    document.querySelector("#tablaEntrenadores").innerHTML = tablaEntrenadores();
    document.querySelector("#tablaJugadores").innerHTML = tablaJugadores();
}

function mostrarMensaje(text) {
    document.querySelector("#mensajes").textContent = text;
}

// ====================
// EVENTOS
// ====================
document.querySelector("#formEquipo").addEventListener("submit", RegistrarEquipo);
document.querySelector("#formEntrenador").addEventListener("submit", RegistrarEntrenador);
document.querySelector("#formJugador").addEventListener("submit", RegistrarJugador);
document.querySelector("#btnAsignarEntrenador").addEventListener("click", AsignarEntrenador);
document.querySelector("#btnAsignarJugador").addEventListener("click", AsignarJugador);

// ====================
// INICIO AUTOMÁTICO
// ====================
document.addEventListener("DOMContentLoaded", actualizarTablas);
