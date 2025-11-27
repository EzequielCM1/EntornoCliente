"use strict";

class Biblioteca {
    constructor(listaLibro = []) {
        this.listaLibro = listaLibro;
    }

    AgregarLibro(libro) {
        if (this.listaLibro.some(lista => lista.id === libro.id)) {
            return false;
        }
        this.listaLibro.push(libro);
        this.GuardarLocalStorage();
        return true;
    }
    BuscarLibro(id) {
        return this.listaLibro.find(libro => libro.id == id)
    }
    prestadoLibro(id) {
        const libro = this.BuscarLibro(id);
        if (!libro) return "No existe";
        if (libro.prestado) return "Ya prestado";
        libro.MarcarPrestado();
        this.GuardarLocalStorage();
        return "prestado ok";
    }
    devolverLibro(id) {
        const libro = this.BuscarLibro(id);
        if (!libro) return "no existe";
        if (!libro.prestado) return "no prestado";
        libro.MarcarDevuelto();
        this.GuardarLocalStorage();
        return "Libro devuelto";
    }
    listarLibros() {
        return this.listaLibro.map(lista => lista.toHTMLrow()).join("");
    }
    GuardarLocalStorage() {
        localStorage.setItem("BibliotecaLibros", JSON.stringify(this.listaLibro)); // otra forma con JSON.parse(localstorage.biblioteca)
    }
    CargarLocalStorage() {
        const dato = localStorage.getItem("BibliotecaLibros");
        if (dato) {
            const libroGuardados = JSON.parse(dato);
            this.listaLibro = libroGuardados.map(l => new Libro(l.id, l.titulo, l.autor, l.categoria, l.prestado));
        }
    }

}

class Libro {
    constructor(id, titulo, autor, categoria, prestado = false) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.prestado = prestado;

    }

    MarcarPrestado() {
        return this.prestado = true;
    }
    MarcarDevuelto() {
        return this.prestado = false;

    }
    toHTMLrow() {
        return `
        <tr>
            <td>${this.id}</td>
            <td>${this.titulo}</td>
            <td>${this.autor}</td>
            <td>${this.categoria}</td>
            <td>${this.prestado ? "SI" : "No"}</td>
        </tr>
        `;
    }
}