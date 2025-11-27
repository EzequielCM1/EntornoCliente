"use strict";

const gym = new Gimnasio();
gym.cargar();

//Alumnos por defecto
if (gym.listaAlumnos.length === 0) {
    const a1 = new Alumno("A01", "Lucía Gómez", 25, "Básico", false);
    const a2 = new Alumno("A02", "Javier Pérez", 31, "Premium", true);
    const a3 = new Alumno("A03", "Sara Martínez", 19, "VIP", false);
    const a4 = new Alumno("A04", "Carlos Ruiz", 27, "Premium", true);

    gym.agregarAlumno(a1);
    gym.agregarAlumno(a2);
    gym.agregarAlumno(a3);
    gym.agregarAlumno(a4);

    gym.guardar();
}

///
//Funciones 

function mostrarMensaje (mensaje){
    document.querySelector("#mensajes").textContent = mensaje;
}  

function actualizarListado (){
    document.querySelector("#tablaAlumnos tbody").innerHTML = gym.listarHTML();
}

function actualizarTotales(){
    const datos = gym.estadisticas();

    document.querySelector("#totalAlumnos").textContent = datos.total;
    document.querySelector("#totalActivos").textContent = datos.activos;
    document.querySelector("#totalPendientes").textContent = datos.pendientes;
}

function mostrar(seccion){
    document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
    document.querySelector(seccion).style.display = "block";
}

document.querySelector("#frmAltaAlumno").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.querySelector("#idAlu").value.trim();
    const nombre = document.querySelector("#nombreAlu").value.trim();
    const edad = document.querySelector("#edadAlu").value.trim();
    const plan = document.querySelector("#planAlu").value;

    if (!id || !nombre || !edad) {
        mostrarMensaje("Debes completar todos los campos");
        return;
    }

    const nuevo = new Alumno(id, nombre, edad, plan);
    const registrado = gym.agregarAlumno(nuevo);

    if (registrado) {
        mostrarMensaje("Alumno registrado correctamente");
        actualizarListado();
        actualizarTotales();
        this.reset();
    } else {
        mostrarMensaje("Ya existe un alumno con ese ID");
    }
});

document.querySelector("#btnActivar").addEventListener("click", () => {
    const id = document.querySelector("#idEstado").value.trim();

    if (!id) {
        mostrarMensaje("Introduce un ID");
        return;
    }

    const r = gym.activarAlumno(id);
    if (r === "OK") {
        mostrarMensaje("Alumno activado");
    } else {
        mostrarMensaje("No existe ese alumno");
    }

    actualizarListado();
    actualizarTotales();
});

document.querySelector("#btnDesactivar").addEventListener("click", () => {
    const id = document.querySelector("#idEstado").value.trim();

    if (!id) {
        mostrarMensaje("Introduce un ID");
        return;
    }

    const r = gym.desactivarAlumno(id);
    if (r === "OK") {
        mostrarMensaje("Alumno desactivado");
    } else {
        mostrarMensaje("No existe ese alumno");
    }

    actualizarListado();
    actualizarTotales();
});


///////////
//Main

document.querySelector("#btnAlta").addEventListener("click", () => mostrar("#seccionAlta"));
document.querySelector("#btnEstado").addEventListener("click", () => mostrar("#seccionEstado"));
document.querySelector("#btnListado").addEventListener("click", () => mostrar("#seccionListado"));
document.querySelector("#btnTotales").addEventListener("click", () => mostrar("#seccionTotales"));

actualizarListado();
actualizarTotales();
mostrar("#seccionAlta");