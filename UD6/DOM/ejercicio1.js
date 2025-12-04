"use strict";

// Recuperamos el elemento con id="resultado"
const res = document.getElementById("resultado");

// 1) Cambiar el texto del primer <p> para que diga "Lista de animales"
const primerParrafo = res.querySelector("p");
primerParrafo.textContent = "Lista de animales";

// 2) Cambiar el último elemento de la lista a "Lobo"
const lista = res.querySelector("ul");
const ultimoLi = lista.lastElementChild;
ultimoLi.textContent = "Lobo";

// 3) Cambiar el texto del <strong> a "de agua"
const strong = res.querySelector("strong");
strong.textContent = "de agua";

// 4) Mostrar por pantalla el contenido del último párrafo
const parrafos = res.querySelectorAll("p");
const ultimoParrafo = parrafos[parrafos.length - 1];
console.log(ultimoParrafo.textContent); // o alert(...)
