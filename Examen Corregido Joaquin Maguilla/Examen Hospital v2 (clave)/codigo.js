'use strict';

let m1 = new Medico('julian', 54545454, 'e@e.com', 2351, 76544);
let m2 = new Medico('Paco', 544454, 'e@e.com', 2345, 76544);
let m3 = new Medico('Pedro', 4545454, 'e@e.com', 3451, 76544);
let m4 = new Medico('Ana', 12345678, 'ana@hospital.com', 1111, 12345);
let m5 = new Medico('Luis', 87654321, '', 2222, 54321);

let fecha1 = new Date();
let c1 = new Cita(54545454, 'Paca', fecha1);
let c2 = new Cita(1111, 'Juan', new Date('2025-11-20'), '10:00');
let c3 = new Cita(2222, 'Maria', new Date('2025-11-21'), '11:00');

let miHospital = new Hospital();

miHospital.altaMedico(m1);
miHospital.altaMedico(m2);
miHospital.altaMedico(m3);
miHospital.altaMedico(m4);
miHospital.altaMedico(m5);
miHospital.altaCita(c2);
miHospital.altaCita(c3);





///////////////
//FUNCIONES
////////////////

const altaMedico = () => {
    

    const txtIdMedico = document.querySelector('#divFrmAltaMedico input[name="txtIdMedico"]').valueAsNumber;
    const txtNombre = document.querySelector('#divFrmAltaMedico input[name="txtNombre"]').value;
    const txtTelefono = document.querySelector('#divFrmAltaMedico input[name="txtTelefono"]').valueAsNumber;
    const txtEmail = document.querySelector('#divFrmAltaMedico input[name="txtEmail"]').value;
    const txtColegiado = document.querySelector('#divFrmAltaMedico input[name="txtColegiado"]').valueAsNumber;

    const divListados = document.querySelector('#listado');

    let mensaje;

    if (txtEmail) {
        mensaje = miHospital.altaMedico(new Medico(txtNombre, txtTelefono, txtEmail, txtIdMedico, txtColegiado))

    } else {
        mensaje = miHospital.altaMedico(new Medico(txtNombre, txtTelefono, '', txtIdMedico, txtColegiado))
    }

    divListados.innerHTML = `<p>${mensaje}</p>`;

}

const altaCita = () => {
    

    const txtIdMedico = document.querySelector('#frmAltaCita input[name="txtIdMedico"]').valueAsNumber;
    const txtPaciente = document.querySelector('#frmAltaCita input[name="txtPaciente"]').value;
    const txtFecha = document.querySelector('#frmAltaCita input[name="txtFecha"]').valueAsDate;
    const txtHora = document.querySelector('#frmAltaCita input[name="txtHora"]').value;

    const divListados = document.querySelector('#listado');

    let mensaje;

    mensaje = miHospital.altaCita(new Cita(txtIdMedico, txtPaciente, txtFecha, txtHora));

    divListados.innerHTML = `<p>${mensaje}</p>`;
}

const tablaPorNombre = () => {

    const divListado = document.querySelector('#listado');
    miHospital.ordenarMedicos('nombre');

    let tablaNombre = '<div id="ordenNombre">'
     tablaNombre += miHospital.listadoMedicos();

    const buttonId = `<button type="button"  id="btnOrdenarId">Ordenar por Id</button>`
    tablaNombre += buttonId;
    tablaNombre += '</div>';
    divListado.innerHTML = tablaNombre;

}



const mostrarListadoMedicos = (orden = 'idMedico') => {
    const divListado = document.querySelector('#listado');
    miHospital.ordenarMedicos(orden);
    
    const tabla = miHospital.listadoMedicos();
    const botonOrden = orden === 'idMedico' 
        ? `<button type="button" id="btnOrdenarNombre">Ordenar por Nombre</button>`
        : `<button type="button" id="btnOrdenarId">Ordenar por ID</button>`;
    
    divListado.innerHTML = tabla + botonOrden;
    
    // Asignar eventos a los botones dinámicos
    if (orden === 'idMedico') {
        document.querySelector('#btnOrdenarNombre').addEventListener('click', () => mostrarListadoMedicos('nombre'));
    } else {
        document.querySelector('#btnOrdenarId').addEventListener('click', () => mostrarListadoMedicos('idMedico'));
    }
}

const mostrarListadoCitas = () => {
    const divListado = document.querySelector('#listado');
    divListado.innerHTML = miHospital.listadoCitas();
}

const ocultarFormularios = () => {
    document.querySelector('#divFrmAltaMedico').classList.add('oculto');
    document.querySelector('#divFrmAltaCita').classList.add('oculto');
}

const ocultarListado = () => {
    document.querySelector('#listado').innerHTML = '';
}

const limpiarFormularios = () => {
    document.querySelectorAll('form').forEach(form => form.reset());
}

///////////////
//MAIN
////////////////

// Inicialización
ocultarFormularios();
miHospital.ordenarMedicos('idMedico');

// Event Listeners principales
document.querySelector('#btnAltaMedico').addEventListener('click', altaMedico);
document.querySelector('#btnAltaCita').addEventListener('click', altaCita);

document.querySelector('#btnFormAltaMedico').addEventListener('click', e => {
    ocultarFormularios();
    ocultarListado();
    document.querySelector('#divFrmAltaMedico').classList.remove('oculto');
    limpiarFormularios();
});

document.querySelector('#btnFormAltaCita').addEventListener('click', e => {
    ocultarFormularios();
    ocultarListado();
    document.querySelector('#divFrmAltaCita').classList.remove('oculto');
    limpiarFormularios();
});

document.querySelector('#btnListadoMedicos').addEventListener('click', e => {
    ocultarFormularios();
    mostrarListadoMedicos('idMedico');
});

document.querySelector('#btnListadoCitas').addEventListener('click', e => {
    ocultarFormularios();
    mostrarListadoCitas();
});