"use strict";

class Alumno {
    constructor(id, nombre, edad, plan, activo = false) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.plan = plan;
        this.activo = activo;
    }

    activar(){
        this.activo = true;
    }
    desactivar(){
        this.activo = false;
    }
    toHTMLrow(){
        return `
        tr>
                <td>${this.id}</td>
                <td>${this.nombre}</td>
                <td>${this.edad}</td>
                <td>${this.plan}</td>
                <td>${this.activo ? "Activo" : "Pendiente"}</td>
            </tr>
        `;
    }
}

class Gimnasio {
    constructor() {
        this.listaAlumnos = [];
    }

    guardar(){
        localStorage.setItem("GimnasioAlumnos", JSON.stringify(this.listaAlumnos));
    }
    cargar(){
        const datos = localStorage.getItem("GimnasioAlumnos");
        if(datos){
            const arr = JSON.parse(datos);
            this.listaAlumnos = arr.map(a => new Alumno(a.id, a.nombre, a.edad, a.plan, a.activo));
        }
    }

    agregarAlumno(alumno){
        if(this.buscarAlumno(alumno.id))return false;
        this.listaAlumnos.push(alumno);
        this.guardar();
        return true;
    }

    buscarAlumno(id){
        return this.listaAlumnos.find(al => al.id == id);

    }
    activarAlumno(id){
        const alu = this.listaAlumnos(id);
        if(!alu) return "Noexiste";
        alu.activar();
        this.guardar();
        return "Ok";
    }

    desactivarAlumno(id){
        const alu = this.listaAlumnos(id);
        if(!alu) return "Noexiste";
        alu.desactivar();
        this.guardar();
        return "Ok";
    }
    listarHTML(){
        return this.listaAlumnos.map(alu => alu.toHTMLrow()).join("");
    }
    estadisticas(){
        const total = this.listaAlumnos.length;
        const activos = this.listaAlumnos.filter(a => a.activo).length;
        const pendientes  = total - activos;

        return {total, activos, pendientes };
    }
}