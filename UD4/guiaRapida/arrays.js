"use strict";

/* =============================
   Ejemplos del objeto Array
============================= */

const info = document.querySelector("#info");

/* --- Crear arrays --- */
const frutas = ["manzana", "pera", "plátano"];
const numeros = [10, 20, 30, 40, 50];

console.log("Array de frutas:", frutas);
console.log("Array de números:", numeros);

/* --- Propiedad length --- */
console.log("Longitud del array frutas:", frutas.length);

/* --- Métodos de adición y eliminación --- */
frutas.push("kiwi"); // Añade al final
frutas.unshift("melón"); // Añade al principio
console.log("Después de push y unshift:", frutas);

frutas.pop(); // Elimina el último
frutas.shift(); // Elimina el primero
console.log("Después de pop y shift:", frutas);

/* --- Acceso y recorrido --- */
console.log("Primera fruta:", frutas[0]);
console.log("Última fruta:", frutas[frutas.length - 1]);

for (let fruta of frutas) {
  console.log("Fruta:", fruta);
}

/* --- Búsqueda y comprobación --- */
console.log("Posición de 'pera':", frutas.indexOf("pera"));
console.log("¿Incluye 'plátano'?", frutas.includes("plátano"));

/* --- Transformaciones --- */
const numerosDobles = numeros.map(n => n * 2);
console.log("Números originales:", numeros);
console.log("Números dobles:", numerosDobles);

const mayoresDe30 = numeros.filter(n => n > 30);
console.log("Números mayores de 30:", mayoresDe30);

const sumaTotal = numeros.reduce((acum, n) => acum + n, 0);
console.log("Suma total:", sumaTotal);

/* --- Cortes y combinaciones --- */
const primerosTres = numeros.slice(0, 3); // No modifica el original
console.log("Primeros tres:", primerosTres);

const borrados = numeros.splice(2, 1); // Elimina 1 elemento desde posición 2
console.log("Elemento borrado:", borrados);
console.log("Array tras splice:", numeros);

const combinados = frutas.concat(numeros);
console.log("Array combinado frutas + números:", combinados);

/* --- Ordenación --- */
const ordenadas = [...frutas].sort();
console.log("Frutas ordenadas:", ordenadas);

const numerosOrdenados = [...numeros].sort((a, b) => a - b);
console.log("Números ordenados:", numerosOrdenados);

/* --- Mostrar en el HTML --- */
info.insertAdjacentHTML("beforeend", `
  <h3>Ejemplo de arrays:</h3>
  <p><strong>Frutas:</strong> ${frutas.join(", ")}</p>
  <p><strong>Números:</strong> ${numeros.join(", ")}</p>
  <p><strong>Suma total:</strong> ${sumaTotal}</p>
  <p><strong>Números mayores de 30:</strong> ${mayoresDe30.join(", ")}</p>
`);
