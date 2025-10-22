"use strict";

//////////////////
//FUNCIONES
//////////////////

/**
 * Calcula el volumen de una esfera
 * @param {number} radio 
 * @returns number
 */

function calculaVolumenDeEsfera(radio){
    return 4/3 * Math.PI * (radio**3)
}

/**
 * Recuperar los datos del resultado calcular y mosttrar 
 */
function recuperarDatosyCalcular(){
    // alert(1); sirve para verificar que hace la funcion
    //1 recuperamos el input donde el uuario ha escrito el radio
    let txtRadio = document.querySelector("#txtRadio");

    // recuperamos el valor del input
    const radio = txtRadio.valueAsNumber;
    // alert(radio);

    //2 Calculamos el volumen de la esfera
    const volumenEsfera = calculaVolumenDeEsfera(radio);

    //3 presentamos el resultado al usuario
    alert(volumenEsfera);
}
//////////////////
//MAIN
//////////////////

// 1 - Recuperamos el boton del HTML
const btnCalcular = document.querySelector("#btnCalcular");

//2 Añadimos funcionlidad al boton
btnCalcular.addEventListener("click", recuperarDatosyCalcular);

/*
let volumenRadio1 = calculaVolumenDeEsfera(1);
alert("El volumen de una esfera de radio uno es " + volumenRadio1);
let volumenRadio2 = calculaVolumenDeEsfera(2);
alert("El volumen de una esfera de radio dos es " + volumenRadio2);
*/