"use strict";

/// Funciones

function saludo() {
    const inputNombre = document.querySelector('#nombre').value;
    console.log("Bienvenido " + inputNombre);
}

const saludo2 = function saludo2() {
    const inputNombre = document.querySelector('#nombre').value;
    console.log("Bienvenido " + inputNombre);
}

const saludo3 =() =>{
    const inputNombre = document.querySelector('#nombre').value;
    console.log("Bienvenido " + inputNombre);
}

// main
const btnSaludo = document.querySelector('#bntSaludo');
btnSaludo.addEventListener("click", saludo );
