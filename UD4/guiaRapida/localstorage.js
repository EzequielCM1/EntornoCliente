"use strict";

/* =============================
   Funciones para insertar texto y HTML
============================= */

// Seleccionamos la sección de información del HTML
const seccionInfo = document.querySelector("#info");

/* --- innerText --- */
// Inserta texto plano dentro del elemento, sin interpretar etiquetas HTML
seccionInfo.innerText = "Texto añadido con innerText (no interpreta etiquetas HTML).";

/* --- innerHTML --- */
// Sustituye el contenido anterior y puede contener HTML
seccionInfo.innerHTML = "<p><strong>Texto añadido con innerHTML</strong> (sí interpreta etiquetas HTML).</p>";

/* --- outerText --- */
// Reemplaza completamente el elemento por texto plano
// Comentado para no eliminar el elemento del DOM
// seccionInfo.outerText = "El elemento ha sido reemplazado completamente con outerText.";

/* --- outerHTML --- */
// Reemplaza el elemento completo por nuevo HTML
// Comentado para no eliminar el elemento en ejecución
// seccionInfo.outerHTML = "<div id='info'><em>Elemento reemplazado con outerHTML</em></div>";

/* --- insertAdjacentText --- */
// Inserta texto en una posición específica (beforebegin, afterbegin, beforeend, afterend)
seccionInfo.insertAdjacentText("beforeend", "\nTexto insertado con insertAdjacentText.");

/* --- insertAdjacentHTML --- */
// Inserta HTML en una posición específica
seccionInfo.insertAdjacentHTML("beforeend", "<p>Nuevo párrafo insertado con insertAdjacentHTML.</p>");

/* --- Agregar un subtítulo para separar --- */
seccionInfo.insertAdjacentHTML("beforeend", "<hr><h3>Ejemplo de LocalStorage</h3>");

/* =============================
   Gestión básica de localStorage
============================= */

// Guardar un valor simple
localStorage.setItem("dato", 5);
console.log("Dato guardado en localStorage:", localStorage.getItem("dato"));

// Obtener valores de diferentes formas
let valor1 = localStorage.dato;
let valor2 = localStorage.getItem("dato");
console.log("Valores recuperados:", valor1, valor2);

// Acceder a una clave por índice
let primeraClave = localStorage.key(0);
console.log("Primera clave en localStorage:", primeraClave);

// Guardar objetos y arrays con JSON
let alumnoObj = { nombre: "Javier", edad: 38 };
let notasArray = [4, 7, 9];

// Convertir a JSON antes de guardar
localStorage.setItem("alumno", JSON.stringify(alumnoObj));
localStorage.setItem("notas", JSON.stringify(notasArray));

// Recuperar y reconstruir
let alumnoRecuperado = JSON.parse(localStorage.getItem("alumno"));
let notasRecuperadas = JSON.parse(localStorage.getItem("notas"));

console.log("Alumno recuperado:", alumnoRecuperado);
console.log("Notas recuperadas:", notasRecuperadas);

// Mostrar en la página los datos recuperados
seccionInfo.insertAdjacentHTML("beforeend", `
  <p><strong>Alumno guardado:</strong> ${alumnoRecuperado.nombre}, Edad: ${alumnoRecuperado.edad}</p>
  <p><strong>Notas:</strong> ${notasRecuperadas.join(", ")}</p>
`);

/* =============================
   Manejador del evento "storage"
============================= */

// Este evento se ejecuta en otras pestañas del mismo dominio
window.addEventListener("storage", function (evento) {
  console.log("=== Cambio en localStorage detectado ===");
  console.log("Clave:", evento.key);
  console.log("Valor antiguo:", evento.oldValue);
  console.log("Valor nuevo:", evento.newValue);
  console.log("URL:", evento.url);

  let almacenamiento = evento.storageArea;
  alert(`Cambio detectado: ${evento.key} = ${evento.newValue}`);
});
