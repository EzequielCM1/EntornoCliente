"use strict";

class Vehiculo {
    constructor(marca, modelo, año, precio, stock) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
        this.stock = stock;
    }


    obtenerDescripcion() {
        return `Marca : ${this.marca}, modelo : ${this.modelo}, año : ${this.año}, precio : ${this.precio}, stock : ${this.stock ? "Si" : "No"}`
    }

    vender() {
        if(this.stock){
            this.stock = false
            return `${this.marca} ${this.modelo} vendido correctamente`;
        }else{
            return `${this.marca} ${this.modelo} ya estaba vendido`;
        }
    }
}
class Coche extends Vehiculo {
    constructor(marca, modelo, año, precio, stock, numeroPuertas, matricula, tipoCombustible) {
        super(marca, modelo, año, precio, stock)
        this.numeroPuertas = numeroPuertas;
        this.matricula = matricula;
        this.tipoCombustible = tipoCombustible;
    }


    calcularImpuestos() {
        if (this.tipoCombustible === "Gasolina") {
            return this.precio * 0.1;
        }
        if (this.tipoCombustible === "Diesel") {
            return this.precio * 0.15;
        }
        if (this.tipoCombustible === "Eléctrico" || this.tipoCombustible === "Gas") {
            return this.precio * 0.05;
        }
    }

    obtenerDescripcion(){
        return `${super.obtenerDescripcion()}, Puertas: ${this.numeroPuertas}, Matrícula: ${this.matricula}, Combustible: ${this.tipoCombustible}, Impuesto: ${this.calcularImpuestos()}€`;
    }


}

class Motocicleta extends Vehiculo {
    constructor(marca, modelo, año, precio, stock, Matrícula, Cilindrada, Tipo) {
        super(marca, modelo, año, precio, stock)
        this.Matrícula = Matrícula;
        this.Cilindrada = Cilindrada;
        this.Tipo = Tipo;
    }

    CalcularImpuesto() {
        if (this.Cilindrada < 500) {
            return this.precio *= 0.05;
        }
        if (this.Cilindrada >= 500) {
            return this.precio *= 0.15;
        }
    }

    obtenerDescripcion() {
        return `${super.obtenerDescripcion()}, Matrícula: ${this.matricula}, Cilindrada: ${this.cilindrada}cc, Tipo: ${this.tipo}, Impuesto: ${this.calcularImpuestos()}€`;
    }
}