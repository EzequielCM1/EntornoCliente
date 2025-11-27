"use strict";

/* ============================
        CLASE VEHÍCULO
============================ */
class Vehiculo {
    constructor(id, marca, modelo, propietario, estado = "En reparación") {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.propietario = propietario;
        this.estado = estado;
    }

    toHTMLrow() {
        return `
            <tr>
                <td>${this.id}</td>
                <td>${this.marca}</td>
                <td>${this.modelo}</td>
                <td>${this.propietario}</td>
                <td>${this.estado}</td>
            </tr>
        `;
    }
}

/* ============================
     CLASE BASE: GestiónGeneral
============================ */
class GestionGeneral {
    constructor() {
        this.lista = [];
    }

    guardar() {
        localStorage.setItem("TallerVehiculos", JSON.stringify(this.lista));
    }

    cargar() {
        const datos = localStorage.getItem("TallerVehiculos");
        if (datos) {
            const objetos = JSON.parse(datos);
            this.lista = objetos.map(
                o => new Vehiculo(o.id, o.marca, o.modelo, o.propietario, o.estado)
            );
        }
    }

    buscar(id) {
        return this.lista.find(v => v.id === id);
    }

    listarHTML() {
        return this.lista.map(v => v.toHTMLrow()).join("");
    }
}

/* ============================
      CLASE TALLER (HEREDA)
============================ */
class Taller extends GestionGeneral {
    constructor() {
        super();
    }

    agregar(vehiculo) {
        if (this.buscar(vehiculo.id)) return false;
        this.lista.push(vehiculo);
        this.guardar();
        return true;
    }

    marcarReparado(id) {
        const veh = this.buscar(id);
        if (!veh) return "No existe";
        veh.estado = "Finalizado";
        this.guardar();
        return "OK";
    }

    marcarPendiente(id) {
        const veh = this.buscar(id);
        if (!veh) return "No existe";
        veh.estado = "En reparación";
        this.guardar();
        return "OK";
    }
}
