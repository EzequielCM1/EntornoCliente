"use strict";

//Funciones
function multiplica1(a, b) {
  return a * b;
}

const multiplica2 = function(a, b) {
  return a * b;
};


const multiplica3 = (a, b) => a * b;

// main
const btnCalcular = document.querySelector('#bntCalcular');
btnCalcular.addEventListener("click", () => {
  console.log("Función declarada:", multiplica1(5, 6));
  console.log("Función expresada:", multiplica2(7, 8));
  console.log("Función flecha:", multiplica3(9, 10));
});
