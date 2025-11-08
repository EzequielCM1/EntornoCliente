"use strict";

class Equipo {
    constructor(Id, nombre, deporte) {
        this.Id = Id;
        this.nombre = nombre;
        this.deporte = deporte;
        this.entrenador = null;
        this.jugadores = [];
    }

    asignarEntrenador(entrenador) {
        this.entrenador = entrenador;
    }

    asignarJugador(jugador) {
        if (!this.jugadores.some(j => j.Id === jugador.Id)) {
            this.jugadores.push(jugador);
        }
    }

    tohtmlRow() {
        const nombreEntrenador = this.entrenador ? this.entrenador.nombre : "Sin asignar";
        const listaJugadores = this.jugadores.length > 0
            ? this.jugadores.map(j => j.nombre).join(", ")
            : "Sin jugadores";
        return `
            <tr>
                <td>${this.Id}</td>
                <td>${this.nombre}</td>
                <td>${this.deporte}</td>
                <td>${nombreEntrenador}</td>
                <td>${listaJugadores}</td>
            </tr>`;
    }
}

class Entrenador {
    constructor(Id, nombre, correo) {
        this.Id = Id;
        this.nombre = nombre;
        this.correo = correo;
    }

    tohtmlRow() {
        return `
            <tr>
                <td>${this.Id}</td>
                <td>${this.nombre}</td>
                <td>${this.correo}</td>
            </tr>`;
    }
}

class Jugador {
    constructor(Id, nombre, posicion, dorsal) {
        this.Id = Id;
        this.nombre = nombre;
        this.posicion = posicion;
        this.dorsal = dorsal;
    }

    tohtmlRow() {
        return `
            <tr>
                <td>${this.Id}</td>
                <td>${this.nombre}</td>
                <td>${this.posicion}</td>
                <td>${this.dorsal}</td>
            </tr>`;
    }
}
