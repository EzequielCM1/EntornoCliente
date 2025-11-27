"use strict";

/* ============================
      INSTANCIAS Y CARGA
============================ */
const taller = new Taller();
taller.cargar();

/* ============================
       UTILIDADES
============================ */
function mostrarMensaje(texto, tipo = "info") {
    const div = document.querySelector("#mensajes");
    div.textContent = texto;
    div.style.background =
        tipo === "exito" ? "lightgreen" :
        tipo === "error" ? "lightcoral" :
        "lightyellow";

    setTimeout(() => div.textContent = "", 3000);
}

function actualizarListado() {
    document.querySelector("#tablaVehiculos tbody").innerHTML = taller.listarHTML();
}

function actualizarTotales() {
    const total = taller.lista.length;
    const finalizados = taller.lista.filter(v => v.estado === "Finalizado").length;
    const reparacion = total - finalizados;

    document.querySelector("#totalVehiculos").textContent = total;
    document.querySelector("#totalReparacion").textContent = reparacion;
    document.querySelector("#totalFinalizados").textContent = finalizados;
}

/* ============================
    MOSTRAR / OCULTAR SECCIONES
============================ */
function mostrar(seccion) {
    document.querySelectorAll("section").forEach(s => s.style.display = "none");
    document.querySelector(seccion).style.display = "block";
}

/* ============================
          Main
============================ */
document.querySelector("#btnAlta").addEventListener("click", () => mostrar("#seccionAlta"));
document.querySelector("#btnEstado").addEventListener("click", () => mostrar("#seccionEstado"));
document.querySelector("#btnListado").addEventListener("click", () => mostrar("#seccionListado"));
document.querySelector("#btnTotales").addEventListener("click", () => mostrar("#seccionTotales"));


/* ===== formulario alta ===== */
document.querySelector("#frmAltaVehiculo").addEventListener("submit", e => {
    e.preventDefault();

    const id = document.querySelector("#idVeh").value.trim();
    const marca = document.querySelector("#marcaVeh").value.trim();
    const modelo = document.querySelector("#modeloVeh").value.trim();
    const propietario = document.querySelector("#propVeh").value.trim();

    if (!id || !marca || !modelo || !propietario) {
        mostrarMensaje("Debes completar todos los campos", "error");
        return;
    }

    const veh = new Vehiculo(id, marca, modelo, propietario);
    const ok = taller.agregar(veh);

    if (ok) {
        mostrarMensaje("Vehículo registrado correctamente", "exito");
        e.target.reset();
        actualizarListado();
        actualizarTotales();
    } else {
        mostrarMensaje("Ya existe un vehículo con ese ID", "error");
    }
});

/* ===== cambio estado ===== */
document.querySelector("#btnMarcarReparado").addEventListener("click", () => {
    const id = document.querySelector("#idEstado").value.trim();
    if (!id) return mostrarMensaje("Introduce ID", "error");

    const r = taller.marcarReparado(id);
    mostrarMensaje(r === "OK" ? "Vehículo marcado como Finalizado" : r, r === "OK" ? "exito" : "error");

    actualizarListado();
    actualizarTotales();
});

document.querySelector("#btnMarcarPendiente").addEventListener("click", () => {
    const id = document.querySelector("#idEstado").value.trim();
    if (!id) return mostrarMensaje("Introduce ID", "error");

    const r = taller.marcarPendiente(id);
    mostrarMensaje(r === "OK" ? "Vehículo marcado como En reparación" : r, r === "OK" ? "exito" : "error");

    actualizarListado();
    actualizarTotales();
});

/* ============================
     INICIALIZAR PÁGINA
============================ */
actualizarListado();
actualizarTotales();
mostrar("#seccionAlta");
