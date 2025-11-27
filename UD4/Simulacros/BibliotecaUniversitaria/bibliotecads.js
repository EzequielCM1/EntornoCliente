"use strict";

const libros = [];
const autores = [];
const estudiantes = [];
const prestamos = [];

// -------- DATOS POR DEFECTO --------
libros.push(
    new Libro("111", "Harry Potter", "Fantasia", 1997),
    new Libro("222", "El Quijote", "Novela", 1605),
    new Libro("333", "Dune", "Sci-Fi", 1965)
);

autores.push(
    new Autor("A1", "J.K. Rowling", "Reino Unido"),
    new Autor("A2", "Cervantes", "España"),
    new Autor("A3", "Frank Herbert", "USA")
);

estudiantes.push(
    new Estudiante("S1", "Ana Torres", "Informática", "3º"),
    new Estudiante("S2", "Luis Pérez", "ADE", "2º")
);
prestamos.push(
    new Prestamo(
        "ISBN001",       // isbn
        "MAT001",        // matricula
        "2025-01-10",    // fechaPrestamo
        "2025-01-20",    // fechaDevolucion
        false            // devuelto
    ),
    new Prestamo(
        "ISBN002",
        "MAT002",
        "2025-01-12",
        "2025-01-25",
        true
    ),
    new Prestamo(
        "ISBN003",
        "MAT001",
        "2025-01-14",
        "",
        false
    )
);

// Mostrar tablas al entrar
document.addEventListener('DOMContentLoaded', () => {
    MostrarLibros();
    MostrarAutores();
    MostrarEstdiantes();
    MostrarPrestados();
});

// -------- FUNCIONES PRINCIPALES --------

function RegistrarLibro (){
    const isbn = document.querySelector('#isbnLibro').value.trim();
    const titulo = document.querySelector('#tituloLibro').value.trim();
    const genero = document.querySelector('#generoLibro').value.trim();
    const anio = document.querySelector('#anioLibro').value.trim();

    if(libros.some(li => li.isbn === isbn)){
        MostrarMensaje("Ya existe un libro con ese ID");
        return;
    }

    libros.push(new Libro(isbn, titulo, genero, anio));
    MostrarMensaje("Libro registrado");
    MostrarLibros();
}

function registrarAutores (){
    const id = document.querySelector('#idAutor').value.trim();
    const nombre = document.querySelector('#nombreAutor').value.trim();
    const nac = document.querySelector('#nacionalidadAutor').value.trim();

    if(autores.some(a => a.id === id)){
        MostrarMensaje("Ya existe un autor con ese ID");
        return;
    }

    autores.push(new Autor(id, nombre, nac));
    MostrarMensaje("Autor registrado");
    MostrarAutores();
}

function reistrarEstudiantes(){
    const matricula = document.querySelector('#matriculaEstudiante').value.trim();
    const nombre = document.querySelector('#nombreEstudiante').value.trim();
    const carrera = document.querySelector('#carreraEstudiante').value.trim();
    const semestre = document.querySelector('#semestreEstudiante').value.trim();

    if(estudiantes.some(e => e.matricula === matricula)){
        MostrarMensaje("Ya existe esta matrícula");
        return;
    }

    estudiantes.push(new Estudiante(matricula, nombre, carrera, semestre));
    MostrarMensaje("Estudiante registrado");
    MostrarEstdiantes();
}

function AsignarAutor(){
    const isbn = document.querySelector('#isbnAsignarAutor').value.trim();
    const id = document.querySelector('#idAutorAsignar').value.trim();
    
    const libro = libros.find(l => l.isbn === isbn);
    const autor = autores.find(a => a.id === id);

    if(!libro || !autor){
        MostrarMensaje("Libro o autor no encontrado");
        return;
    }

    libro.AsignarAutor(autor.nombre);
    autor.agregarLibro(isbn);

    MostrarMensaje("Autor asignado al libro");
    MostrarLibros();
    MostrarAutores();
}

function RegistrarPrestamo(){
    const isbn = document.querySelector('#isbnPrestamo').value.trim();
    const matricula = document.querySelector('#matriculaPrestamo').value.trim();

    const libro = libros.find(l => l.isbn === isbn);
    const est = estudiantes.find(e => e.matricula === matricula);

    if(!libro || !est){
        MostrarMensaje("Libro o estudiante no encontrado");
        return;
    }

    if(libro.prestado){
        MostrarMensaje("El libro ya está prestado");
        return;
    }

    const fecha = new Date().toLocaleDateString();

    prestamos.push(new Prestamo(isbn, matricula, fecha, "Sin devolver"));
    libro.marcarPrestado();
    est.agregarPrestamo(isbn);

    MostrarMensaje("Préstamo registrado");
    MostrarPrestados();
    MostrarLibros();
}

function RegistrarDevolucion() {
    const isbnDev = document.querySelector('#isbnDevolucion').value.trim();
    const matDev = document.querySelector('#matriculaDevolucion').value.trim();

    const prestamo = prestamos.find(
        p => p.isbn === isbnDev && p.matricula === matDev && !p.devuelto
    );

    const libro = libros.find(li => li.isbn === isbnDev);
    const estudiante = estudiantes.find(e => e.matricula === matDev);

    if (!prestamo || !libro || !estudiante) {
        MostrarMensaje("No se encontró un préstamo activo con esos datos");
        return;
    }

    prestamo.marcarDevuelto();
    prestamo.fechaDevolucion = new Date().toLocaleDateString();

    libro.marcarDisponible();
    estudiante.devolverLibro(isbnDev);

    MostrarMensaje("Libro devuelto correctamente");
    MostrarPrestados();
    MostrarLibros();
    MostrarEstdiantes();
}

// -------- MOSTRAR TABLAS --------

function MostrarLibros(){
    const tbody = document.querySelector('#cuerpoTablaLibros');
    tbody.innerHTML = libros.map(l => `
        <tr>
            <td>${l.isbn}</td>
            <td>${l.titulo}</td>
            <td>${l.genero}</td>
            <td>${l.anio}</td>
            <td>${l.autor ?? ''}</td>
            <td>${l.prestado ? "Prestado" : "Disponible"}</td>
        </tr>
    `).join('');
}

function MostrarAutores(){
    const tbody = document.querySelector('#cuerpoTablaAutores');
    tbody.innerHTML = autores.map(a => `
        <tr>
            <td>${a.id}</td>
            <td>${a.nombre}</td>
            <td>${a.nacionalidad}</td>
            <td>${a.libros?.join(", ") ?? ""}</td>
        </tr>
    `).join('');
}

function MostrarEstdiantes(){
    const tbody = document.querySelector('#cuerpoTablaEstudiantes');
    tbody.innerHTML = estudiantes.map(e => `
        <tr>
            <td>${e.matricula}</td>
            <td>${e.nombre}</td>
            <td>${e.carrera}</td>
            <td>${e.semestre}</td>
            <td>${e.librosPrestados?.join(", ") ?? ""}</td>
        </tr>
    `).join('');
}

function MostrarPrestados(){
    const tbody = document.querySelector('#cuerpoTablaPrestamos');
    tbody.innerHTML = prestamos.map(p => {
        const libro = libros.find(l => l.isbn === p.isbn);
        const est = estudiantes.find(e => e.matricula === p.matricula);
        return `
            <tr>
                <td>${p.isbn}</td>
                <td>${libro ? libro.titulo : ""}</td>
                <td>${est ? est.nombre : p.matricula}</td>
                <td>${p.fechaPrestamo || ""}</td>
                <td>${p.fechaDevolucion || ""}</td>
                <td>${p.devuelto ? "Devuelto" : "Activo"}</td>
            </tr>
        `;
    }).join('');
}

// -------- MENSAJES --------

function MostrarMensaje(texto) {
    const cont = document.querySelector('#mensajes');
    cont.innerHTML = `<div class="mensaje">${texto}</div>`;
    setTimeout(() => cont.innerHTML = "", 3000);
}


// -------- EVENTOS --------

document.querySelector('#btnRegistrarLibro').addEventListener("click", RegistrarLibro);
document.querySelector('#btnRegistrarAutor').addEventListener("click", registrarAutores);
document.querySelector('#btnRegistrarEstudiante').addEventListener("click", reistrarEstudiantes);
document.querySelector('#btnAsignarAutor').addEventListener("click", AsignarAutor);
document.querySelector('#btnRegistrarPrestamo').addEventListener("click", RegistrarPrestamo);
document.querySelector('#btnRegistrarDevolucion').addEventListener("click", RegistrarDevolucion);
