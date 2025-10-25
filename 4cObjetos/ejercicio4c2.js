"use strict";

let cremas = [];

function Ingredientes(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
}

Ingredientes.prototype.toHTMLRow = function(){
    return `<tr><td>${this.nombre}</td><td>${this.cantidad} g</td></tr>`;
}


function Crema(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
    this.ingredientes = [];
}

Crema.prototype.addIngrediente = function (nombre, cantidad){
    const nuevo =  new Ingredientes (nombre, cantidad);
    this.ingredientes.push(nuevo);
};

Crema.prototype.removeIngrediente = function (i){
    if (i >= 0 && i < this.ingredientes.length){
        this.ingredientes.splice(i , 1);
    }
};

Crema.prototype.toHTMLTable = function (){
    let tabla = `<table>
        <tr><th>Ingrediente</th><th>Cantidad</th></tr>`;

    this.ingredientes.forEach(ing => {
        tabla += ing.toHTMLRow();
    });

     tabla += '</table>';
     return tabla;
}





///////
//Main
/////
// ---- Crear una crema y añadir ingredientes ----
const crema = new Crema("Crema Hidratante", 15.99, "Nivea");
crema.addIngrediente("Agua", 50);
crema.addIngrediente("Aloe Vera", 20);
crema.addIngrediente("Aceite de Coco", 10);
crema.addIngrediente("Vitamina E", 5);

// ---- Mostrar la información de la crema ----
document.getElementById("infoCrema").innerHTML = `
      <p><strong>Nombre:</strong> ${crema.nombre}</p>
      <p><strong>Precio:</strong> ${crema.precio} €</p>
      <p><strong>Marca:</strong> ${crema.marca}</p>
    `;

// ---- Mostrar la tabla de ingredientes ----
document.getElementById("tablaIngredientes").innerHTML = crema.toHTMLTable();