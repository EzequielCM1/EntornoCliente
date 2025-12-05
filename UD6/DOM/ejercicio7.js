"use strict";

const input = document.querySelector("#tarea");
const btn = document.querySelector("#add");
const lista = document.querySelector("#lista");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function guardar() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function pintar() {
    lista.innerHTML = "";
    tareas.forEach((t, i) => {
        let li = document.createElement("li");
        li.textContent = t.texto;

        if (t.hecha) li.style.textDecoration = "line-through";

        li.addEventListener("click", () => {
            tareas[i].hecha = !tareas[i].hecha;
            guardar();
            pintar();
        });

        lista.appendChild(li);
    });
}

btn.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    tareas.push({ texto: input.value, hecha: false });
    input.value = "";
    guardar();
    pintar();
});

pintar();
