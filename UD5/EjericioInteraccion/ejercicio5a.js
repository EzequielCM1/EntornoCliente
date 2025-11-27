"use strict";

const emoji = document.getElementById("emoji");

// Click izquierdo
emoji.addEventListener("click", () => {
    emoji.textContent = "🙁";
});

// Doble click
emoji.addEventListener("dblclick", () => {
    emoji.textContent = "😒";
});

// Click derecho
emoji.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Evita que aparezca el menú del navegador
    emoji.textContent = "😀";
});
