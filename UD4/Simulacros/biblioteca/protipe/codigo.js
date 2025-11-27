"use strict";

// ======= Inicialización =======
const biblioteca = new Biblioteca();
biblioteca.cargarLocalStorage();

// ======= Mostrar formularios =======
function mostrarFormulario(opcion) {
    // Ocultar todas
    document.querySelector("#seccionAlta").style.display = "none";
    document.querySelector("#seccionPrestamo").style.display = "none";
    document.querySelector("#seccionTotales").style.display = "none";
    document.querySelector("#seccionListado").style.display = "none";

    // Mostrar según la opción
    switch (opcion) {
        case 1:
            document.querySelector("#seccionAlta").style.display = "block";
            break;
        case 2:
            document.querySelector("#seccionPrestamo").style.display = "block";
            break;
        case 3:
            document.querySelector("#seccionTotales").style.display = "block";
            break;
        case 4:
            document.querySelector("#seccionListado").style.display = "block";
            actualizarTablaLibros();
            break;
    }
}

// ======= Alta de libro =======
function darAlta(e) {
    e.preventDefault();

    const id = document.querySelector("#idLibro").value.trim();
    const titulo = document.querySelector("#tituloLibro").value.trim();
    const autor = document.querySelector("#autorLibro").value.trim();
    const categoria = document.querySelector("#categoriaLibro").value;

    if (!id || !titulo || !autor || !categoria) {
        mostrarMensaje("Debes completar todos los campos", "error");
        return;
    }

    const nuevoLibro = new Libro(id, titulo, autor, categoria);
    const agregado = biblioteca.agregarLibro(nuevoLibro);

    if (agregado) {
        mostrarMensaje("Libro registrado correctamente", "exito");
        document.querySelector("#frmAltaLibro").reset();
        actualizarTablaLibros();
        actualizarTotales();
    } else {
        mostrarMensaje("Ya existe un libro con ese ID", "error");
    }
}

// ======= Préstamo =======
function prestarLibro() {
    const id = document.querySelector("#idPrestamo").value.trim();
    const resultado = biblioteca.prestarLibro(id);

    if (resultado === "prestado ok") {
        mostrarMensaje("Libro prestado correctamente", "exito");
    } else {
        mostrarMensaje(resultado, "error");
    }

    actualizarTablaLibros();
    actualizarTotales();
}

// ======= Devolución =======
function devolverLibro() {
    const id = document.querySelector("#idPrestamo").value.trim();
    const resultado = biblioteca.devolverLibro(id);

    if (resultado === "Libro devuelto") {
        mostrarMensaje("Libro devuelto correctamente", "exito");
    } else {
        mostrarMensaje(resultado, "error");
    }

    actualizarTablaLibros();
    actualizarTotales();
}

// ======= Mensajes y actualizaciones =======
function mostrarMensaje(texto, tipo = "info") {
    const div = document.querySelector("#mensajes");
    div.textContent = texto;
    div.style.background = tipo === "exito" ? "lightgreen" :
                           tipo === "error" ? "lightcoral" : "lightyellow";
    div.style.color = "black";
    div.style.padding = "8px";
    div.style.textAlign = "center";
    div.style.borderRadius = "5px";
    setTimeout(() => div.textContent = "", 3000);
}

function actualizarTablaLibros() {
    const tbody = document.querySelector("#tablaLibros tbody");
    tbody.innerHTML = biblioteca.listarLibros();
}

function actualizarTotales() {
    const total = biblioteca.listaLibro.length;
    const prestados = biblioteca.listaLibro.filter(l => l.prestado).length;
    const disponibles = total - prestados;

    document.querySelector("#totalLibros").textContent = total;
    document.querySelector("#totalPrestados").textContent = prestados;
    document.querySelector("#totalDisponibles").textContent = disponibles;
}

// ======= Eventos =======
document.querySelector("#btnAlta").addEventListener("click", () => mostrarFormulario(1));
document.querySelector("#btnPrestamo").addEventListener("click", () => mostrarFormulario(2));
document.querySelector("#btnTotales").addEventListener("click", () => mostrarFormulario(3));
document.querySelector("#btnListado").addEventListener("click", () => mostrarFormulario(4));

document.querySelector("#frmAltaLibro").addEventListener("submit", darAlta);
document.querySelector("#btnPrestar").addEventListener("click", prestarLibro);
document.querySelector("#btnDevolver").addEventListener("click", devolverLibro);

// ======= Inicio =======
actualizarTablaLibros();
actualizarTotales();
