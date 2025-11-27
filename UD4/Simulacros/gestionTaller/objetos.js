"use strict";

/* ============================
      OBJETO VEHÍCULO
============================ */
function Vehiculo(id, marca, modelo, propietario, estado = "En reparación") {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.propietario = propietario;
    this.estado = estado;
}

Vehiculo.prototype.toHTMLrow = function () {
    return `
        <tr>
            <td>${this.id}</td>
            <td>${this.marca}</td>
            <td>${this.modelo}</td>
            <td>${this.propietario}</td>
            <td>${this.estado}</td>
        </tr>`;
};

/* ============================
    PROTOTIPO SISTEMA BASE
============================ */
function SistemaGestion() {
    this.lista = [];
}

SistemaGestion.prototype.guardar = function () {
    localStorage.setItem("TallerVehiculos", JSON.stringify(this.lista));
};

SistemaGestion.prototype.cargar = function () {
    const datos = localStorage.getItem("TallerVehiculos");
    if (datos) {
        const objetos = JSON.parse(datos);
        this.lista = objetos.map(
            o => new Vehiculo(o.id, o.marca, o.modelo, o.propietario, o.estado)
        );
    }
};

SistemaGestion.prototype.buscar = function (id) {
    return this.lista.find(v => v.id === id);
};

SistemaGestion.prototype.listarHTML = function () {
    return this.lista.map(v => v.toHTMLrow()).join("");
};

/* ============================
      TALLER (HEREDA)
============================ */
function Taller() {
    SistemaGestion.call(this);
}

Taller.prototype = Object.create(SistemaGestion.prototype);
Taller.prototype.constructor = Taller;

Taller.prototype.agregar = function (vehiculo) {
    if (this.buscar(vehiculo.id)) return false;
    this.lista.push(vehiculo);
    this.guardar();
    return true;
};

Taller.prototype.marcarReparado = function (id) {
    const veh = this.buscar(id);
    if (!veh) return "No existe";
    veh.estado = "Finalizado";
    this.guardar();
    return "OK";
};

Taller.prototype.marcarPendiente = function (id) {
    const veh = this.buscar(id);
    if (!veh) return "No existe";
    veh.estado = "En reparación";
    this.guardar();
    return "OK";
};
