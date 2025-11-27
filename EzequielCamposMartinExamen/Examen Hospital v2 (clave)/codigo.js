"use strict";

///////////
//Funciones
////////////
const lmedicos = [];
const lcitas = [];

// prueba 
/*
lmedicos.push(
    new Medico(1, "Juan", 4424255, "pepitojuan@gmail.com", 2),
    new Medico(2, "Pepe", 44242455, "pepen@gmail.com", 3)
);
lcitas.push(
    new Cita(1, "Marta", "25-02-2025","22:22")
);
*/

ListaMedicos();
ListaMedicos();

mostrarFormularios(0);
function mostrarFormularios(numero) {
    document.querySelector("#divFrmAltaMedico").classList.add("oculto");
    document.querySelector("#divFrmAltaCita").classList.add("oculto");

    // segun sea el numero mostrara o ocultara los formularios
    switch (numero) {
        case 1:
            document.querySelector("#divFrmAltaMedico").classList.remove("oculto");
            break;
        case 2:
            document.querySelector("#divFrmAltaCita").classList.remove("oculto");
            break;
        case 0: // Por defecto que lo puse con 0 , los formualrios no se mostraran
            document.querySelector("#divFrmAltaMedico").classList.add("oculto");
            document.querySelector("#divFrmAltaCita").classList.add("oculto");
            break;
    }

}

//funcion para dar de alta al medico
function altaMedico() {
    const idMedico = document.querySelector(`input[name="txtIdMedico"]`).value.trim();
    const nombre = document.querySelector(`input[name="txtNombre"]`).value.trim();
    const telefono = document.querySelector(`input[name="txtTelefono"]`).value.trim();
    const email = document.querySelector(`input[name="txtEmail"]`).value.trim();
    const colegiado = document.querySelector(`input[name="txtColegiado"]`).value.trim();

    const nuevoMedico = new Medico(idMedico, nombre, telefono, email, colegiado);
    const registrar = lmedicos.altaMedico(nuevoMedico);

    const div = document.querySelector("#listado");
    div.textContent = registrar;
}

// funcion para dar de alta la cita
function altaCita() {
    const idMedico = document.querySelector(`input[name="txtIdMedico"]`).value.trim();
    const paciente = document.querySelector(`input[name="txtPaciente"]`).value.trim();
    const fecha = document.querySelector(`input[name="txtFecha"]`).valueAsDate;
    const hora = document.querySelector(`input[name="txtHora"]`).valueAsDate;


    const nuevaCita = new Cita(idMedico, paciente, fecha, hora);
    const registrar = lcitas.altaCita(nuevaCita);

    const div = document.querySelector("#listado");
    div.textContent = registrar;
}

// funcion mostrar lista de medicos
function ListaMedicos() {
    const div = document.querySelector("#listado");
    div.innerHTML = lmedicos.map(m => m.listadoMedicos).join("");

    // Boton para ordenar por listas
    div.innerHTML = `<input type="button" id="btnordenar" value="Ordenar" />`;
}


// funcion mostrar lista de citas
function ListaCitas() {
    const div = document.querySelector("#listado");
    div.innerHTML = lmedicos.map(m => m.listadoCitas).join("");
}

///////////
//Main
/////////

//Botones para mostrar
const btnFormAltaMedico = document.querySelector("#btnFormAltaMedico").addEventListener("click", () => mostrarFormularios(1));
const btnFormAltaCita = document.querySelector("#btnFormAltaCita").addEventListener("click", () => mostrarFormularios(2));

//botones listas 

document.querySelector("#btnListadoMedicos").addEventListener("click", ListaMedicos);
document.querySelector("#btnListadoCitas").addEventListener("click", ListaCitas)

//Botones formulario
document.querySelector("#btnAltaMedico").addEventListener("click", altaMedico);
document.querySelector("#btnAltaCita").addEventListener("click", altaCita);


