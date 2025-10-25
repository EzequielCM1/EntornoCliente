// Constructor del objeto Ingrediente
function Ingrediente(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad; // en gramos
}

// Método que devuelve una fila HTML con los datos del ingrediente
Ingrediente.prototype.toHTMLRow = function() {
    return `<tr><td>${this.nombre}</td><td>${this.cantidad} g</td></tr>`;
};

// Constructor del objeto Crema
function Crema(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
    this.ingredientes = []; // Array de objetos Ingrediente
}

// Método para añadir un ingrediente
Crema.prototype.addIngrediente = function(nombre, cantidad) {
    const nuevoIngrediente = new Ingrediente(nombre, cantidad);
    this.ingredientes.push(nuevoIngrediente);
};

// Método para eliminar el i-ésimo ingrediente
Crema.prototype.removeIngrediente = function(i) {
    if (i >= 0 && i < this.ingredientes.length) {
        this.ingredientes.splice(i, 1);
    } else {
        console.log("Índice fuera de rango");
    }
};

// Método que devuelve una tabla HTML con todos los ingredientes
Crema.prototype.toHTMLTable = function() {
    let tabla = `<table border="1">
        <thead>
            <tr><th>Nombre del Ingrediente</th><th>Cantidad</th></tr>
        </thead>
        <tbody>`;

    for (let ing of this.ingredientes) {
        tabla += ing.toHTMLRow();
    }

    tabla += `</tbody></table>`;
    return tabla;
};

// Ejemplo de uso
const crema1 = new Crema("Crema Hidratante", 12.99, "Nivea");

crema1.addIngrediente("Agua", 50);
crema1.addIngrediente("Glicerina", 10);
crema1.addIngrediente("Aceite de almendras", 5);

console.log(crema1.toHTMLTable());
