'use strict';

//////////////////////
//PERSONA
////////////////////

function Persona(nombre, telefono, email) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
}

//////////////////////
//MEDICO
////////////////////

function Medico(nombre, telefono, email, idMedico, colegiado) {
    Persona.call(this, nombre, telefono, email);
    this.idMedico = idMedico;
    this.colegiado = colegiado;
}

Medico.prototype.toHTMLRow = function () {
    return `<tr>
        <td>${this.idMedico}</td>
        <td>${this.nombre}</td>
        <td>${this.telefono}</td>
        <td>${this.email}</td>
        <td>${this.colegiado}</td>
    </tr>`;
}

Object.setPrototypeOf(Medico.prototype, Persona.prototype);
Medico.prototype.constructor = Medico;

//////////////////////
//HOSPITAL
////////////////////

class Hospital {
    constructor() {
        this.medicos = [];
        this.citas = [];
    }

    altaMedico(oMedico) {
        if (this.medicos.find(m => m.idMedico === oMedico.idMedico)) {
            return `Error: idMedico registrado previamente`;
        } else {
            this.medicos.push(oMedico);
            return `Alta de Médico OK`;
        }
    }

    altaCita(oCita) {
        if (this.medicos.find(m => m.idMedico === oCita.idMedico)) {
            this.citas.push(oCita);
            return `Alta de cita OK`;
        } else {
            return 'Id Medico no registrado';
        }
    }

    listadoMedicos() {
        let medicosSinEmail = this.medicos.filter(m => !m.email || m.email === '');
        let tabla = `<table class="listadosOrd">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Nombre</th>
                                <th>Telefono</th>
                                <th>Email</th>
                                <th>Colegiado</th>
                            </tr>
                        </thead>
                        <tbody>`;
        
        tabla += this.medicos.map(m => m.toHTMLRow()).join('');
        tabla += `</tbody><tfoot><tr><td colspan="5">nº de medicos sin email: ${medicosSinEmail.length}</td></tr></tfoot></table>`;
        
        return tabla;
    }

    listadoCitas() {
        let tabla = `<table class="listadosCitas">
                        <thead>
                            <tr>
                                <th>id Médico</th>
                                <th>Nombre Médico</th>
                                <th>Paciente</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                            </tr>
                        </thead>
                        <tbody>`;
        
        tabla += this.citas.map(cita => {
            const nombreMedico = this.getNombreMedico(cita.idMedico);
            return cita.toHTMLRow(nombreMedico);
        }).join('');
        
        tabla += `</tbody></table>`;
        return tabla;
    }

    getNombreMedico(idMedico) {
        const medico = this.medicos.find(m => m.idMedico === idMedico);
        return medico ? medico.nombre : 'No encontrado';
    }

    ordenarMedicos(tipo) {
        if (tipo === 'idMedico') {
            this.medicos.sort((m1, m2) => m1.idMedico - m2.idMedico);
        } else if (tipo === 'nombre') {
            this.medicos.sort((m1, m2) => m1.nombre.localeCompare(m2.nombre));
        }
    }
}

//////////////////////
//CITA
////////////////////

class Cita {
    constructor(idMedico, paciente, fecha, hora) {
        this.idMedico = idMedico;
        this.paciente = paciente;
        this.fecha = fecha;
        this.hora = hora;
    }

    toHTMLRow(nombreMedico) {
        return `<tr>
            <td>${this.idMedico}</td>
            <td>${nombreMedico}</td>
            <td>${this.paciente}</td>
            <td>${this.fecha.toLocaleDateString ? this.fecha.toLocaleDateString() : this.fecha}</td>
            <td>${this.hora}</td>
        </tr>`;
    }
}