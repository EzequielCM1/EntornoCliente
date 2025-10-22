"use strict";

//////////////////
//FUNCIONES
//////////////////

function accion () {
    alert("Hola caracola");
}


//////////////////
//MAIN
//////////////////

//document.getElementById("btnAccion"); - no se usa

// 1 - Recuperamos el boton del html
let btnAccion = document.querySelector("#btnAccion");
//console.log("El contenido de la varable: ");
//console.log(btnAccion);

// 2 - Añadimos funcionalidad al boton
btnAccion.addEventListener("click", accion);