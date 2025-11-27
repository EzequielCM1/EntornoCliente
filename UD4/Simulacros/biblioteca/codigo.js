"use strict";

//////
//Funciones
const biblioteca = new Biblioteca();
biblioteca.CargarLocalStorage();

////Mostrar secciones diferentes 
/*
function mostrarFormularioAlta(){
    document.querySelector("#seccionAlta").style.display = "block";
    document.querySelector("#seccionPrestamo").style.display = "none";
    document.querySelector("#seccionTotales").style.display = "none";
    document.querySelector("#seccionListado").style.display = "none";
}

function mostrarFormularioPrestamo() {
    document.querySelector("#seccionAlta").style.display = "none";
    document.querySelector("#seccionPrestamo").style.display = "block";
    document.querySelector("#seccionTotales").style.display = "none";
    document.querySelector("#seccionListado").style.display = "none";
}


function mostrarTotales() {
    document.querySelector("#seccionAlta").style.display = "none";
    document.querySelector("#seccionPrestamo").style.display = "none";
    document.querySelector("#seccionTotales").style.display = "block";
    document.querySelector("#seccionListado").style.display = "none";
}

function mostrarListado() {
    document.querySelector("#seccionAlta").style.display = "none";
    document.querySelector("#seccionPrestamo").style.display = "none";
    document.querySelector("#seccionTotales").style.display = "none";
    document.querySelector("#seccionListado").style.display = "block";
}
*/
function mostrarFormulario(e){
    document.querySelector("#seccionAlta").style.display = "none";
    document.querySelector("#seccionPrestamo").style.display = "none";
    document.querySelector("#seccionTotales").style.display = "none";
    document.querySelector("#seccionListado").style.display = "none";
    switch (e){
        case 1 :
            document.querySelector("#seccionAlta").style.display = "block";
            break;
         case 2 :
            document.querySelector("#seccionPrestamo").style.display = "block";
            break;
         case 3 :
            document.querySelector("#seccionTotales").style.display = "block";
            break;
         case 4 :
            document.querySelector("#seccionListado").style.display = "block";
        break;
    }
    // en caso de que sea ocultar con el css que dentro esta la clase de ocultar , pues se debe de escribir lo siguiente seccionAlta.classlist.add("oculto") --- y remove para eliminar
}
//// funciones del formulario
function darAlta(e){
    e.preventDefault(); // esto es importante ya que al ser un submit no lo carga

    const idlibro = document.querySelector('#idLibro').value.trim();
    const titulo = document.querySelector('#tituloLibro').value.trim();
    const autor = document.querySelector('#autorLibro').value.trim();
    const categoria = document.querySelector('#categoriaLibro').value;

    if (!idlibro || !titulo || !autor || !categoria) {
        mostrarMensaje("Debes completar todos los campos", "error");
        return;
    }
    
    const nuevoLibro = new Libro(idlibro, titulo, autor, categoria);
    const agregado = biblioteca.AgregarLibro(nuevoLibro);

    if(agregado){
        mostrarMensaje("Libro registrado correctamente", "exito");
        document.querySelector("#frmAltaLibro").reset();
        actualizarTablaLibros();
        actualizarTotales();
    }else{
        mostrarMensaje("Ya existe un libro con ese ID", "error");
    }
}


function prestarlibro(){
    const id = document.querySelector('#idPrestamo').value.trim();

    const resultado = biblioteca.prestadoLibro(id);

     if (resultado === "prestado ok") {
        mostrarMensaje("Libro prestado correctamente", "exito");
    } else {
        mostrarMensaje(resultado, "error");
    }
    actualizarTablaLibros();
    actualizarTotales();
}
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



function mostrarMensaje(texto, tipo = "info") {
    const div = document.querySelector("#mensajes");
    div.textContent = texto;
    div.style.background = tipo === "exito" ? "lightgreen" :
                           tipo === "error" ? "lightcoral" : "lightyellow";
    div.style.color = "black";
    setTimeout(() => div.textContent = "", 3000);
}

function actualizarTablaLibros() {
    const tbody = document.querySelector("#tablaLibros tbody");
    tbody.innerHTML = biblioteca.listarLibros();
}

function actualizarTotales (){
    const total = biblioteca.listaLibro.length;
    const prestado = biblioteca.listaLibro.filter(pres => pres.prestado).length;
    const disponible = total-prestado;

    document.querySelector('#totalLibros').textContent =total;
    document.querySelector('#totalPrestados').textContent = prestado;
    document.querySelector('#totalDisponibles').textContent =disponible;
}

document.addEventListener("DOMContentLoaded", () => {
    biblioteca.CargarLocalStorage();
    actualizarTablaLibros();
    actualizarTotales();
});
/////
//main
/* para coger el primero boton del formulario es poner su id y luego : > buttton
/* Botones para mostrar secciones */
/*
document.querySelector("#btnAlta").addEventListener("click", mostrarFormularioAlta);
document.querySelector("#btnPrestamo").addEventListener("click", mostrarFormularioPrestamo);
document.querySelector("#btnTotales").addEventListener("click", mostrarTotales);
document.querySelector("#btnListado").addEventListener("click", mostrarListado);
*/
document.querySelector("#btnAlta").addEventListener("click", () => mostrarFormulario(1));
document.querySelector("#btnPrestamo").addEventListener("click",() => mostrarFormulario(2));
document.querySelector("#btnTotales").addEventListener("click",() => mostrarFormulario(3));
document.querySelector("#btnListado").addEventListener("click",() => mostrarFormulario(4));
/* Botones de formularios */

document.querySelector('#frmAltaLibro').addEventListener("submit", darAlta);
document.querySelector("#btnPrestar").addEventListener("click", prestarlibro);
document.querySelector("#btnDevolver").addEventListener("click", devolverLibro);

actualizarTablaLibros();
actualizarTotales();