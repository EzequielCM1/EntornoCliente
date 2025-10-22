"use strict";

//////////////////
//FUNCIONES
//////////////////

function tablaMultiplicar (){

    let txtNumero = document.querySelector("#txtNumero");
    const numero = txtNumero.valueAsNumber;
    const divTabla = document.querySelector("#divTabla");

    let solucion = "";
    for (let i = 0 ; i<=10 ; i++){
        const resultado = numero * i;
        solucion += "<p>" + numero + " x " + i + " = " + resultado + "</p>";
        
    }
    divTabla.innerHTML = solucion ;

}

//////////////////
//MAIN
//////////////////


// 1 - Recuperamos el boton del HTML
const btnTabla = document.querySelector("#btnTabla");

//2 Añadimos funcionlidad al boton
btnTabla.addEventListener("click", tablaMultiplicar);
