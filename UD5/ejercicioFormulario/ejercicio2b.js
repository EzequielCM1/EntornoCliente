"use strict";


document.querySelector("#enviar").addEventListener("click", e => {
    e.preventDefault();
    /* const form = document.forms["formulario"]; y luego en los checkbox pones en vez de document el form*/

    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const divNotice = document.querySelector(".notice");

    const seleccionados = [];
    checkboxes.forEach(e => {
        if(e.checked){
            seleccionados.push(e.value);
        }
    });

    if(seleccionados.length === 0 || seleccionados.length === 3){
        divNotice.textContent = "Debes seleccionar 1 o 2 opciones";
    }else{
        divNotice.textContent = "Has seleccionado : "+seleccionados.join(", ");
    }
})
