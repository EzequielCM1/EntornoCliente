"use strict";


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function filtraPares1(arr) {
  return arr.filter(num => num % 2 === 0);
}


const filtraPares2 = function(arr) {
  return arr.filter(num => num % 2 === 0);
};

const filtraPares3 = (arr) => arr.filter(num => num % 2 === 0);


//Main
// Elementos del HTML
const btnFiltrar = document.querySelector("#btnFiltrar");
const resultado = document.querySelector("#resultado");


btnFiltrar.addEventListener("click", () => {
  const pares = filtraPares3(numeros); 

  resultado.textContent = `Números pares: ${pares.join(", ")}`;
});
