"use strict";

class Tienda {
    constructor(tBicis = [], numVentas = 0) {
        this.tBicis = tBicis;
        this.numVentas = numVentas;
    }

    altaBicicleta(bicicleta) {
        if (this.tBicis.some(b => b.localizador === bicicleta.localizador)) {
            return false;
        } else {
            this.tBicis.push(bicicleta);
            return true;
        }
    }

    ventaBici(localizador) {
        const bici = this.tBicis.find(b => b.localizador === localizador);

        if (!bici) return "NO_EXISTE";
        if (bici.vendida) return "YA_VENDIDA";

        bici.vendida = true;
        this.numVentas++;
        return "OK";
    }

    listadoCarretera() {
        const bicis = this.tBicis.filter(b => b instanceof Carretera);
        if (bicis.length === 0) return "<tr><td colspan='4'>No hay bicicletas de carretera</td></tr>";
        return bicis.map(b => b.toHTMLrow()).join("");
    }

    listadoMontania() {
        const bicis = this.tBicis.filter(b => b instanceof Montaña);
        if (bicis.length === 0) return "<tr><td colspan='4'>No hay bicicletas de montaña</td></tr>";
        return bicis.map(b => b.toHTMLrow()).join("");
    }

    numCarretera() { return this.tBicis.filter(b => b instanceof Carretera).length; }
    numMontaña() { return this.tBicis.filter(b => b instanceof Montaña).length; }
    numTotal() { return this.tBicis.length; }
    numVenta() { return this.tBicis.filter(b => b.vendida).length; }
}

// ------------------

class Bicicleta {
    constructor(localizador, año) {
        this.localizador = localizador;
        this.año = año;
        this.vendida = false;
    }

    toHTMLrow() {
        return `<tr>
            <td>${this.localizador}</td>
            <td>${this.año}</td>
            <td>${this.vendida ? "Sí" : "No"}</td>
        </tr>`;
    }
}

class Carretera extends Bicicleta {
    constructor(localizador, año, numPlatos) {
        super(localizador, año);
        this.numPlatos = numPlatos;
    }

    toHTMLrow() {
        return `<tr>
            <td>${this.localizador}</td>
            <td>${this.año}</td>
            <td>${this.vendida ? "Sí" : "No"}</td>
            <td>${this.numPlatos}</td>
        </tr>`;
    }
}

class Montaña extends Bicicleta {
    constructor(localizador, año, numSuspensiones) {
        super(localizador, año);
        this.numSuspensiones = numSuspensiones;
    }

    toHTMLrow() {
        return `<tr>
            <td>${this.localizador}</td>
            <td>${this.año}</td>
            <td>${this.vendida ? "Sí" : "No"}</td>
            <td>${this.numSuspensiones}</td>
        </tr>`;
    }
}
