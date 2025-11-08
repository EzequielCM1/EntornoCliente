"use strict";

// ----- Clase Tienda -----
class Tienda {
    constructor() {
        this.tBicis = [];  // almacena todas las bicicletas
        this.numVentas = 0;
    }

    altaBicicleta(bici) {
        // ¿Existe ya? -> no se puede repetir localizador
        if (this.tBicis.some(b => b.localizador == bici.localizador)) {
            return false; // ya existe
        } else {
            this.tBicis.push(bici);
            return true; // alta correcta
        }
    }

    ventaBici(localizador) {
        const bici = this.tBicis.find(b => b.localizador == localizador);

        if (!bici) return "NO_EXISTE";
        if (bici.vendida) return "YA_VENDIDA";

        bici.vendida = true;
        this.numVentas++;
        return "OK";
    }

    // Totales
    numCarretera() {
        return this.tBicis.filter(b => b instanceof Carretera).length;
    }

    numMontaña() {
        return this.tBicis.filter(b => b instanceof Montaña).length;
    }

    numTotal() {
        return this.tBicis.length;
    }

    numVenta() {
        return this.tBicis.filter(b => b.vendida).length;
    }
}

// ----- Clase Bicicleta -----
function Bicicleta(localizador, año, vendida = false) {
    this.localizador = localizador;
    this.año = año;
    this.vendida = vendida;
}

Bicicleta.prototype.toHTMLrow = function () {
    return `<tr><td>${this.localizador}</td><td>${this.año}</td><td>${this.vendida ? "Sí" : "No"}</td></tr>`;
};

// ----- Carretera -----
function Carretera(localizador, año, vendida, numPlatos) {
    Bicicleta.call(this, localizador, año, vendida);
    this.numPlatos = numPlatos;
}
Carretera.prototype = Object.create(Bicicleta.prototype);
Carretera.prototype.constructor = Carretera;

// ----- Montaña -----
function Montaña(localizador, año, vendida, numSuspensiones) {
    Bicicleta.call(this, localizador, año, vendida);
    this.numSuspensiones = numSuspensiones;
}
Montaña.prototype = Object.create(Bicicleta.prototype);
Montaña.prototype.constructor = Montaña;
