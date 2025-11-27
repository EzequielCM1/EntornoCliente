"use strict";

// ==============================
// PROPIEDADES Y MÉTODOS DE NUMBER
// ==============================

const numero1 = Number("456");
console.log("Resultado de Number('456'):", numero1);

console.log("Number.isNaN('trece'):", Number.isNaN("trece"));
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));

console.log("isNaN('trece'):", isNaN("trece"));
console.log("isNaN(123):", isNaN(123));

console.log("parseInt('12ex'):", parseInt("12ex"));
console.log("parseInt('x12er'):", parseInt("x12er"));

console.log("parseFloat('45.67abc'):", parseFloat("45.67abc"));
console.log("parseFloat('abc45.67'):", parseFloat("abc45.67"));

const numero2 = 123.45678;
console.log("123.45678.toFixed(2):", numero2.toFixed(2));


// ==============================
// PROPIEDADES Y MÉTODOS DE STRING
// ==============================

const s = "Hola caracola";

console.log("Longitud de s:", s.length);
console.log("s[3]:", s[3]);

console.log("Mayúsculas:", s.toUpperCase());
console.log("Minúsculas:", s.toLowerCase());

const sEspacios = "   Hola caracola   ";
console.log("trim():", sEspacios.trim());
console.log("trimStart():", sEspacios.trimStart());
console.log("trimEnd():", sEspacios.trimEnd());

console.log("indexOf('la'):", s.indexOf("la"));
console.log("lastIndexOf('la'):", s.lastIndexOf("la"));
console.log("indexOf('ca', 5):", s.indexOf("ca", 5));

console.log("split('la'):", s.split("la"));

console.log("slice(0, 4):", s.slice(0, 4));
console.log("slice(-4):", s.slice(-4));
console.log("substring(5, 9):", s.substring(5, 9));

console.log("replace('la', 'LU'):", s.replace("la", "LU"));
console.log("replaceAll('la', 'LU'):", s.replaceAll("la", "LU"));
console.log("replace(/ca/g, 'KO'):", s.replace(/ca/g, "KO"));

console.log("padStart(20):", s.padStart(20));
console.log("padEnd(22, '.'):", s.padEnd(22, "."));

console.log("startsWith('Ho'):", s.startsWith("Ho"));
console.log("endsWith('cola'):", s.endsWith("cola"));
console.log("includes('car'):", s.includes("car"));

console.log("match(/[a-z][aeiou]l/g):", s.match(/[a-z][aeiou]l/g));
for (const m of s.matchAll(/[a-z][aeiou]l/g)) {
    console.log("matchAll:", m[0]);
}

console.log("charAt(0):", s.charAt(0));
console.log("at(-1):", s.at(-1));

console.log("search(/car/):", s.search(/car/));
console.log("includes('Hola'):", s.includes("Hola"));

console.log("s.repeat(2):", s.repeat(2));

console.log("concat():", s.concat(". ", "Parece ", "menterio"));

console.log('"ánodo".localeCompare("ahora", "es"):', "ánodo".localeCompare("ahora", "es"));


// ==============================
// PROPIEDADES Y MÉTODOS DE MATH
// ==============================

console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.SQRT2:", Math.SQRT2);

console.log("Math.abs(-5):", Math.abs(-5));
console.log("Math.sign(-10):", Math.sign(-10));
console.log("Math.sin(0):", Math.sin(0));
console.log("Math.cos(Math.PI):", Math.cos(Math.PI));

console.log("Math.max(3, 9, -2):", Math.max(3, 9, -2));
console.log("Math.min(3, 9, -2):", Math.min(3, 9, -2));

console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.ceil(4.1):", Math.ceil(4.1));
console.log("Math.round(4.5):", Math.round(4.5));

console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.pow(2, 3):", Math.pow(2, 3));

console.log("Math.random():", Math.random());
console.log("Math.trunc(4.9):", Math.trunc(4.9));
console.log("Math.cbrt(27):", Math.cbrt(27));


// ==============================
// OBJETO DATE
// ==============================

// Crear fechas con diferentes formatos
let f = new Date("2031-10-17");   // 17 de octubre de 2031
let f2 = new Date(Date.now());    // fecha y hora actual
let f3 = new Date(2026, 11, 30);  // 30 de diciembre de 2026 (mes 11 = diciembre)

// Mostrar datos de la fecha
console.log("Año:", f.getFullYear());
console.log("Mes:", f.getMonth() + 1); // 0 = enero, 1 = febrero, ...
console.log("Día:", f.getDate());

// Métodos para mostrar la fecha en distintos formatos locales
console.log("toLocaleDateString():", f2.toLocaleDateString());
console.log("toLocaleTimeString():", f2.toLocaleTimeString());
console.log("toLocaleString():", f2.toLocaleString());

// Ejemplo de cómo obtener fecha desde input type="date"
document.querySelector("#btnFecha").addEventListener("click", () => {
    const input = document.querySelector("#fechaInput");

    // Recuperar la fecha como cadena
    const valorCadena = input.value;
    console.log("value (cadena):", valorCadena);

    // Recuperar la fecha como objeto Date
    const valorFecha = input.valueAsDate;
    console.log("valueAsDate (objeto Date):", valorFecha);
});
/////////////////////////////////
// Guardar fecha
function guardarFecha() {
    const f = new Date();
    const ms = f.getTime();
    localStorage.setItem("fechaGuardada", ms);
    console.log("Guardado:", ms);
}

// PARA RECUPERAR UNA FECHA DEL INPUT ES ASI :
// const f = document.querySelector("#fecha").valueAsDate;
// localStorage.setItem("miFecha", f.getTime());

/// RECUPERAR
//const ms = Number(localStorage.getItem("miFecha"));
//const fecha = new Date(ms);
// console.log(fecha.toLocaleDateString());


// Recuperar fecha
function cargarFecha() {
    const ms = Number(localStorage.getItem("fechaGuardada"));
    if (!ms) {
        console.log("No hay fecha guardada");
        return;
    }
    const fecha = new Date(ms);
    console.log("Fecha reconstruida:", fecha.toLocaleString());
}
