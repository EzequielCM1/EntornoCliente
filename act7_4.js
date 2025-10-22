"use strict";

///////////
//Funciones
///////////

function getPHP(){
    let numero = document.querySelector("#txtNumero").valueAsNumber;

    let solucion = `<p>El valor del PH del agua de <strong> ${numero} </strong></p>`;

    if(numero < 3.5){
        solucion += "<p>El PH es muy ácido</p>";
    }
    else if (numero >11){
        solucion += "<p>El PH es muy alcalino</p>";
    }
    else if (numero >= 3.5 && numero < 6.5){
        solucion += "<p>El PH es ligeramente ácido</p>";
    }
    else if (numero >= 6.5 && numero < 8.5){
        solucion += "<p>El PH es neutro</p>";
    }else{
        solucion += "<p>El PH es ligeramente alcalino</p>";
    }

    document.querySelector("#calidad").innerHTML = solucion;
}

///////////
//Main
///////////

const btnCalculo = document.querySelector("#btnCalculo");

btnCalculo.addEventListener("click", getPHP);
