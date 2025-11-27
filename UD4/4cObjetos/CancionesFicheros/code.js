"use strict";

let ficheros = [];


/* ==============================
   FUNCIONES
   ============================== */

function agregarElemento() {
  const nombreFichero = document.getElementById("nombreFichero").value.trim();
  const tamanio = parseFloat(document.getElementById("tamanio").value);
  const nombreCancion = document.getElementById("nombreCancion").value.trim();
  const duracion = parseFloat(document.getElementById("duracion").value);
  const tipo = document.querySelector("input[name='tipo']:checked").value;

  if (tipo === "cancion") {
    if (!nombreFichero || !tamanio || !nombreCancion || !duracion) {
      alert(" Rellena todos los campos de la canción");
      return;
    }
    const cancion = new Cancion(nombreFichero, tamanio, nombreCancion, duracion);
    ficheros.push(cancion);
  } else {
    if (!nombreFichero || !tamanio) {
      alert(" Rellena los campos del fichero");
      return;
    }
    const fichero = new Fichero(nombreFichero, tamanio);
    ficheros.push(fichero);
  }

  alert(" Elemento agregado correctamente");

}

function mostrarLista() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  if (ficheros.length === 0) {
    lista.innerHTML = "<li>No hay elementos en la lista</li>";
    return;
  }

  for (const elemento of ficheros) {
    const li = document.createElement("li");
    li.textContent = elemento.getDatos(); 
    lista.appendChild(li);
  }
}
/* ==============================
   MAIN
   ============================== */
window.onload = function () {
  document.getElementById("btnAgregar").addEventListener("click", agregarElemento);
  document.getElementById("btnMostrar").addEventListener("click", mostrarLista);
};
