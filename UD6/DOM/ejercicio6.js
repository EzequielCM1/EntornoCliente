"use strict";

// ====== CREAR TABLA AL PULSAR BOTÓN ======
document.querySelector("#btnCrearTabla").addEventListener("click", () => {
    let lista = document.querySelector("#lista");
    let zonaTabla = document.querySelector("#zonaTabla");

    // Si ya existe la tabla, no la duplicamos
    if (document.querySelector("#tablaAlumnos")) return;

    // Crear tabla
    let tabla = document.createElement("table");
    tabla.id = "tablaAlumnos";
    tabla.border = "1";

    // Crear thead
    let thead = document.createElement("thead");
    let trHead = document.createElement("tr");

    ["Nombre", "Apellido"].forEach(texto => {
        let th = document.createElement("th");
        th.textContent = texto;
        trHead.appendChild(th);
    });

    thead.appendChild(trHead);
    tabla.appendChild(thead);

    // Crear tbody
    let tbody = document.createElement("tbody");

    // Rellenar tabla con la lista original
    lista.querySelectorAll("li").forEach(li => {
        let partes = li.innerText.trim().split(/\s+/);
        let apellido = partes.length > 1 ? partes.pop() : "";
        let nombre = partes.join(" ");

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = nombre;

        let td2 = document.createElement("td");
        td2.textContent = apellido;

        tr.appendChild(td1);
        tr.appendChild(td2);

        tbody.appendChild(tr);
    });

    tabla.appendChild(tbody);
    zonaTabla.appendChild(tabla);
});


// ====== AÑADIR NUEVO ALUMNO A LISTA Y TABLA ======
document.querySelector("#btnAdd").addEventListener("click", () => {
    let nombre = document.querySelector("#txtNombre").value.trim();
    let apellido = document.querySelector("#txtApellido").value.trim();
    let añadirFinal = document.querySelector("#chkFinal").checked;

    if (!nombre || !apellido) {
        alert("Rellena nombre y apellido");
        return;
    }

    let li = document.createElement("li");
    li.textContent = `${nombre} ${apellido}`;

    let lista = document.querySelector("#lista");

    if (añadirFinal) lista.appendChild(li);
    else lista.prepend(li);

    // Añadir también a la tabla
    let tabla = document.querySelector("#tablaAlumnos");
    if (tabla) {
        let tbody = tabla.querySelector("tbody");

        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = nombre;
        let td2 = document.createElement("td");
        td2.textContent = apellido;

        tr.appendChild(td1);
        tr.appendChild(td2);

        if (añadirFinal) tbody.appendChild(tr);
        else tbody.prepend(tr);
    }

    // limpiar
    document.querySelector("#txtNombre").value = "";
    document.querySelector("#txtApellido").value = "";
});


// ====== EVENTO DELEGADO PARA MOVER LI AL PRIMERO ======
document.querySelector("#lista").addEventListener("click", (e) => {
    if (e.target && e.target.tagName === "LI") {
        let lista = document.querySelector("#lista");
        lista.prepend(e.target);
    }
});


// ====== EVENTO DELEGADO PARA CLONAR FILAS DE LA TABLA ======
document.addEventListener("click", (e) => {
    let tabla = document.querySelector("#tablaAlumnos");
    if (!tabla) return;

    let fila = e.target.closest("tbody tr");
    if (fila) {
        let clon = fila.cloneNode(true);
        tabla.querySelector("tbody").appendChild(clon);
    }
});
