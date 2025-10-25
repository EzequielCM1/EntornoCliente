"use strict";

// funciones

const intlado = document.querySelector('#cuadrado');
const intRadio = document.querySelector('#radio');
const resultado = document.querySelector("#resultado");

let numLado = 0;
let numRadio = 0;


function areaCirculo(radio) {
    return Math.PI * radio * radio;
}
function areaCuadrado(lado) {
    return lado * lado ;
}

function mostrar() {
    
    numLado = intlado.valueAsNumber;
    numRadio = intRadio.valueAsNumber;

    const circulo = areaCirculo(numRadio).toFixed(2);
    const cuadrado = areaCuadrado(numLado).toFixed(2);

    resultado.innerHTML = `
        <strong>Área del círculo:</strong> ${circulo} <br>
        <strong>Área del cuadrado:</strong> ${cuadrado}
    `;
}


// main

const btnCalculo = document.querySelector('#btnCalcular').addEventListener('click', mostrar);