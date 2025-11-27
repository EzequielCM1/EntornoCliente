"use strict";

function Persona(nombre, telefono, email) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;

}

function Medico(idMedico, nombre, telefono, email, colegiado) {
    Persona.call(this, nombre, telefono, email);
    this.idMedico = idMedico;
    this.colegiado = colegiado;

}
Medico.prototype = Object.create(Persona.prototype);
Medico.prototype.constructor = Medico;

Medico.prototype.toHTMLrow = function () {
    return `
        <tr>
                <td>${this.idMedico}</td>
                <td>${this.colegiado}</td>
                <td>${this.nombre}</td>
                <td>${this.telefono}</td>
                <td>${this.email}</td>
            </tr>
        `;
}


class Hospital {
    constructor(medicos = [], citas = []) {
        this.medicos = medicos;
        this.citas = citas;
    }

    altaMedico(oMedico) {
        const medico = this.medicos.find(p => p.idMedico == oMedico.idMedico);
        if (medico) {
            return "Error : idMedico registrado previamente";
        }
        this.medicos.push(oMedico);
        return "Alta de médpacienteico ok";
    }
    altaCita(oCita) {
        const medico = this.medicos.find(c => c.idMedico == oCita.idMedico);

        if (!medico) {
            return "IdMedico no registrado";
        }
        this.citas.push(oCita);
        return "Alta de cita OK";
    }
    listadoMedicos() {
        let html = `
        <tr>
            <td>ID</td>
            <td>Colegiado</td>
            <td>Nombre</td>
            <td>Teléfono</td>
            <td>Email</td>
        </tr>
    `;

        this.medicos.forEach(m => {
            html += m.toHTMLrow();
        });

        return html;
    }

    listadoCitas() {
        let html = `
        <tr>
            <td>ID</td>
            <td>Paciente</td>
            <td>Fecha</td>
            <td>Hora</td>
        </tr>
    `;

        this.citas.forEach(c => {
            html += `
            <tr>
                <td>${c.idMedico}</td>
                <td>${c.paciente}</td>
                <td>${c.fecha}</td>
                <td>${c.hora}</td>
            </tr>
        `;
        });

        return html;
    }

    getNombreMedico(idMedico) {

    }
    ordenarMedicos(nombre) {
        const medico = this.medico.find(p => p.nombre == nombre);
        return `
        <tr>
                <td>ID</td>
                <td>Colegiado</td>
                <td>Nombre</td>
                <td>Teléfono</td>
                <td>Email</td>
            </tr>
            <tr>
                <td>${medico.idMedico}</td>
                <td>${medico.colegiado}</td>
                <td>${medico.nombre}</td>
                <td>${medico.telefono}</td>
                <td>${medico.email}</td>
            </tr>
        `;
    }

}

class Cita {
    constructor(idMedico, paciente, fecha, hora) {
        this.idMedico = idMedico;
        this.paciente = paciente;
        this.fecha = fecha;
        this.hora = hora;
    }

    toHTMLrow() {
    return `
        <tr>
            <td>${this.idMedico}</td>
            <td>${this.paciente}</td>
            <td>${this.fecha}</td>
            <td>${this.hora}</td>
        </tr>
    `;
}

}