"use strict";

class Libro {
    constructor(isbn, titulo, genero, anio, autor=null, prestado = false) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.autor = autor;
        this.prestado = prestado;
    }

    asignarAutor(nombre){
        this.autor = nombre;
    }

    marcarPrestado(){
        this.prestado = true;
    }
    marcarDisponible(){
        this.prestado = false;
    }

}

class Autor {
    constructor(id, nombre, nacionalidad, libros = []) {
        this.id = id;
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.libros = libros;
    }

    agregarLibro(nombre){
        this.libros.push(nombre);
    }
}

class Estudiante {
    constructor(matricula, nombre, carrera, semestre, librosPrestados=[]) {
        this.matricula = matricula;
        this.nombre = nombre;
        this.carrera = carrera;
        this.semestre = semestre;
        this.librosPrestados = librosPrestados;
    }

    agregarPrestamo(nombre){
        this.librosPrestados.push(nombre);
    }
    devolverLibro(isbn){
        this.librosPrestados = this.librosPrestados.find(libro => libro !== isbn)
    }
}

class Prestamo {
    constructor(isbn, matricula, fechaPrestamo, fechaDevolucion, devuelto= false){
        this.isbn = isbn;
        this.matricula = matricula;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = fechaDevolucion;
        this.devuelto = devuelto;
    }
    marcarDevuelto(){
        this.devuelto = true;
    }
}