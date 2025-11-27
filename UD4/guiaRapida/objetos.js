"use strict";

/* ======================================================
   OBJETOS EN JAVASCRIPT - Ejemplos prácticos
====================================================== */

// Creación del objeto alumno literal
const alumno = {
  nombre: "Ezequiel",
  apellidos: "Campos Martin",
  edad: 44,
  mayorEdad: true,
  curso: "DAW",
  saludo() {
    console.log("Hola, soy " + this.nombre);
  },
  nombreCompleto() {
    return `${this.nombre} ${this.apellidos}`;
  }
};

console.log("Objeto alumno:", alumno);
console.log("Nombre completo:", alumno.nombreCompleto());

/* ======================================================
   Acceso a propiedades
====================================================== */
console.log("Acceso con punto:", alumno.nombre);
console.log("Acceso con corchetes:", alumno["apellidos"]);

let prop = "curso";
alumno[prop] = "DAW";
console.log("Propiedad dinámica:", alumno[prop]);

/* ======================================================
   Recorrido con for..in
====================================================== */
console.log("Recorrido del objeto con for..in:");
for (let clave in alumno) {
  console.log(`${clave} = ${alumno[clave]}`);
}

/* ======================================================
   Propiedades enumerables
====================================================== */
const propiedades = Object.keys(alumno);
console.log("Propiedades del objeto:", propiedades);

/* ======================================================
   Métodos como propiedades
====================================================== */
alumno.saludo();
console.log("Nombre completo (método):", alumno.nombreCompleto());

/* ======================================================
   Funciones flecha y this
====================================================== */
const usuario1 = {
  nombre: "Ana",
  saludar: () => {
    // En funciones flecha, "this" apunta a window
    console.log("Hola desde función flecha, this =", this);
  }
};

usuario1.saludar();

const usuario2 = {
  nombre: "Marta",
  saludar() {
    console.log("Hola, soy " + this.nombre);
  }
};

usuario2.saludar();

/* ======================================================
   Añadir y eliminar propiedades
====================================================== */
let persona = { nombre: "Zequi", apellidos: "Campos", edad: 20 };
persona.fechaIncorporacion = "22-02-2025";
delete persona.edad;

persona.toString = function () {
  return `${this.nombre} ${this.apellidos} se incorporó a clase el ${this.fechaIncorporacion}`;
};

console.log("Persona:", persona.toString());

/* ======================================================
   Propiedades avanzadas
====================================================== */
Object.defineProperty(persona, "id", {
  value: 123,
  enumerable: false, // no se mostrará en for..in
  writable: false
});

console.log("Propiedades enumerables:", Object.keys(persona));
console.log("Propiedad no enumerable (id):", persona.id);

/* ======================================================
   Comparación y clonación
====================================================== */
let a = { x: 4, y: 6 };
let b = a; // misma referencia
let c = { x: 4, y: 6 };

console.log("a == b ?", a == b);
console.log("a == c ?", a == c);
console.log("Comparación por valor con JSON:", JSON.stringify(a) === JSON.stringify(c));

/* ======================================================
   Clonación segura
====================================================== */

let alumnoOriginal = {
  nombre: "Javier",
  edad: 44,
  info() {
    return this.nombre + " " + this.edad;
  },
  tlf: [123, 789]
};

// Clon superficial (conserva métodos y copia por referencia los arrays)
let clonSuperficial = { ...alumnoOriginal };
console.log("Clon superficial:", clonSuperficial);

// Clon profundo de los datos sin copiar funciones (evita error DataCloneError)
let clonSeguro = structuredClone({
  nombre: alumnoOriginal.nombre,
  edad: alumnoOriginal.edad,
  tlf: alumnoOriginal.tlf
});
console.log("Clon seguro (sin funciones):", clonSeguro);

/* ======================================================
   Clon con método personalizado dentro del objeto
====================================================== */
let alumnoConMetodo = {
  nombre: "Javier",
  edad: 44,
  tlf: [123, 789],
  info() {
    return this.nombre + " " + this.edad;
  },

  // Método para crear un clon profundo personalizado
  clonar() {
    let clon = { ...this };
    clon.tlf = structuredClone(this.tlf); // copia profunda del array
    return clon;
  }
};

let clonPersonalizado = alumnoConMetodo.clonar();
console.log("Clon personalizado:", clonPersonalizado);
