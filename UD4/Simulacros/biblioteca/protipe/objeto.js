"use strict";

// ======= Constructor de Libro =======
function Libro(id, titulo, autor, categoria, prestado) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.categoria = categoria;
    this.prestado = prestado || false;
}

// ======= Métodos de Libro (prototipo) =======
Libro.prototype.marcarPrestado = function() {
    this.prestado = true;
};

Libro.prototype.marcarDevuelto = function() {
    this.prestado = false;
};

Libro.prototype.toHTMLrow = function() {
    return `
        <tr>
            <td>${this.id}</td>
            <td>${this.titulo}</td>
            <td>${this.autor}</td>
            <td>${this.categoria}</td>
            <td>${this.prestado ? "Sí" : "No"}</td>
        </tr>
    `;
};

// ======= Constructor de Biblioteca =======
function Biblioteca() {
    this.listaLibro = [];
}

// ======= Métodos de Biblioteca (prototipo) =======
Biblioteca.prototype.agregarLibro = function(libro) {
    if (this.listaLibro.some(l => l.id === libro.id)) {
        return false;
    }
    this.listaLibro.push(libro);
    this.guardarLocalStorage();
    return true;
};

Biblioteca.prototype.buscarLibro = function(id) {
    return this.listaLibro.find(l => l.id === id);
};

Biblioteca.prototype.prestarLibro = function(id) {
    const libro = this.buscarLibro(id);
    if (!libro) return "No existe";
    if (libro.prestado) return "Ya está prestado";
    libro.marcarPrestado();
    this.guardarLocalStorage();
    return "prestado ok";
};

Biblioteca.prototype.devolverLibro = function(id) {
    const libro = this.buscarLibro(id);
    if (!libro) return "No existe";
    if (!libro.prestado) return "No estaba prestado";
    libro.marcarDevuelto();
    this.guardarLocalStorage();
    return "Libro devuelto";
};

Biblioteca.prototype.listarLibros = function() {
    return this.listaLibro.map(l => l.toHTMLrow()).join("");
};

Biblioteca.prototype.guardarLocalStorage = function() {
    localStorage.setItem("BibliotecaLibros", JSON.stringify(this.listaLibro));
};

Biblioteca.prototype.cargarLocalStorage = function() {
    const datos = localStorage.getItem("BibliotecaLibros");
    if (datos) {
        const array = JSON.parse(datos);
        this.listaLibro = array.map(l => new Libro(l.id, l.titulo, l.autor, l.categoria, l.prestado));
    }
};


///Para cuando haya una herencia que en este caso no hay debes hacer llo siguiente 
// imaginando que hay una super clase que sea herencia de este
// 
// Herencia del prototipo de SistemaGestion
//Biblioteca.prototype = Object.create(SistemaGestion.prototype);
// Biblioteca.prototype.constructor = Biblioteca;