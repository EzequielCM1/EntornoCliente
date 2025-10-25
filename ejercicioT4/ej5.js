"use strict";


//////////////
//Funciones 
/////////////

const celciusInt = document.querySelector('#celsius');
const fahrenheitINT = document.querySelector('#fahrenheit');
const resultado = document.querySelector("#resultado");


let celsius = 0;
let fahrenheit = 0;

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32 ;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit -32) * 5/9;
}

function mostrar() {
    celsius = celciusInt.valueAsNumber;
    fahrenheit = fahrenheitINT.valueAsNumber;

    const resultadoCelsiusAFahrenheit = celsiusAFahrenheit(celsius).toFixed(2);
    const resultadoFahrenheitACelsius = fahrenheitACelsius(fahrenheit).toFixed(2);


    resultado.innerHTML = `
    <strong>${celsius} equivale a : </strong>${resultadoCelsiusAFahrenheit}<br>
    <strong>${fahrenheit} equivale a : </strong>${resultadoFahrenheitACelsius}<br>`;

}

////////////
//Main
///////////

const btnCalculo = document.querySelector('#btnCalcular').addEventListener('click', mostrar);