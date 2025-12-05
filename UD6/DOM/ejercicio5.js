"use strict";
// BOTÓN ORDENAR
document.querySelector("#btnOrdenar").addEventListener("click", () => {
    let tbody = document.querySelector("table tbody");

    // Convertimos las filas a array y ordenamos por el nombre (columna 0)
    Array.from(tbody.children)
        .sort((a, b) => a.children[0].innerText.localeCompare(b.children[0].innerText))
        .forEach(fila => tbody.appendChild(fila)); // Reinsertamos en orden
});

// BOTÓN BUSCAR
document.querySelector("#btnBuscar").addEventListener("click", () => {
    let texto = document.querySelector("#txtBuscar").value.toLowerCase();
    let filas = document.querySelectorAll("table tbody tr");

    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = "<h3>Coincidencias:</h3>";

    filas.forEach(fila => {
        let nombre = fila.children[0].innerText.toLowerCase();

        if (nombre.startsWith(texto) && texto !== "") {
            let p = document.createElement("p");
            p.textContent = fila.children[0].innerText + " " + fila.children[1].innerText;
            resultado.appendChild(p);
        }
    });
});
