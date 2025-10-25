"use strict";

    const num1Int = document.querySelector("#num1");
    const num2Int = document.querySelector("#num2");
    const resultado = document.querySelector("#resultado");

    let num1 = 0;
    let num2 = 0;


function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) return "No se puede dividir entre 0";
    return a / b;
}

function mostrarResultados() {
    
    num1 = num1Int.valueAsNumber;
    num2 = num2Int.valueAsNumber;

    const suma = sumar(num1, num2);
    const resta = restar(num1, num2);
    const multi = multiplicar(num1, num2);
    const divi = dividir(num1, num2);

    resultado.innerHTML = `
        <strong>Resultados:</strong><br>
        Suma: ${suma}<br>
        Resta: ${resta}<br>
        Multiplicación: ${multi}<br>
        División: ${divi}
    `;
}


//// 
///Main
document.querySelector("#btnCalcular").addEventListener("click", mostrarResultados);
