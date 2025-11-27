"use strict";

/* ============================================
            CONSTRUCTOR ALUMNO
============================================ */

function Alumno(id, nombre, edad, plan, activo = false) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.plan = plan;
    this.activo = activo;
}

/* === Métodos de Alumno en el prototipo === */

Alumno.prototype.activar = function () {
    this.activo = true;
};

Alumno.prototype.desactivar = function () {
    this.activo = false;
};

Alumno.prototype.toHTMLrow = function () {
    return `
        <tr>
            <td>${this.id}</td>
            <td>${this.nombre}</td>
            <td>${this.edad}</td>
            <td>${this.plan}</td>
            <td>${this.activo ? "Activo" : "Pendiente"}</td>
        </tr>`;
};


/* ============================================
            CONSTRUCTOR GIMNASIO
============================================ */

function Gimnasio() {
    this.listaAlumnos = [];
}

/* === Métodos de Gimnasio en su prototipo === */

Gimnasio.prototype.guardar = function () {
    localStorage.setItem("GimnasioAlumnos", JSON.stringify(this.listaAlumnos));
};

Gimnasio.prototype.cargar = function () {
    const datos = localStorage.getItem("GimnasioAlumnos");

    if (datos) {
        const arr = JSON.parse(datos);

        // Convertimos objetos puros en instancias de Alumno
        this.listaAlumnos = arr.map(a => 
            new Alumno(a.id, a.nombre, a.edad, a.plan, a.activo)
        );
    }
};

Gimnasio.prototype.agregarAlumno = function (alumno) {
    if (this.buscarAlumno(alumno.id)) return false;

    this.listaAlumnos.push(alumno);
    this.guardar();
    return true;
};

Gimnasio.prototype.buscarAlumno = function (id) {
    return this.listaAlumnos.find(a => a.id === id);
};

Gimnasio.prototype.activarAlumno = function (id) {
    const alu = this.buscarAlumno(id);
    if (!alu) return "No existe";
    alu.activar();
    this.guardar();
    return "OK";
};

Gimnasio.prototype.desactivarAlumno = function (id) {
    const alu = this.buscarAlumno(id);
    if (!alu) return "No existe";
    alu.desactivar();
    this.guardar();
    return "OK";
};

Gimnasio.prototype.listarHTML = function () {
    return this.listaAlumnos.map(a => a.toHTMLrow()).join("");
};

Gimnasio.prototype.estadisticas = function () {
    const total = this.listaAlumnos.length;
    const activos = this.listaAlumnos.filter(a => a.activo).length;
    const pendientes = total - activos;

    return { total, activos, pendientes };
};
