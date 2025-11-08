'use strict';

///////////////
// Tienda
//////////////

/**
 * Clase que representa una tienda de bicicletas
 * @class Tienda
 */
class Tienda {

    /**
     * @type {Array<Bicicleta>}
     */
    tBicis;
    
    /**
     * @type {number}
     */
    numVentas; //int


    numCarretera;
    numMontaña;
    numTotal;
    




    //Métodos
    constructor(tBicis, numVentas) {
        this.tBicis = tBicis;
        this.numVentas = numVentas;
    }

    /**
     * Agregar una bicicleta
     * @param {Bicicleta} bicicleta 
     * @returns {void}
     */
    altaBicicleta(bicicleta) {
            
        if (bicicleta instanceof Carretera) {//Comprobamos su instancia para saber si lo declaramos con un tipo o con otro
            this.tBicis.push(new Carretera);
        } else if (bicicleta instanceof Montaña) {
            this.tBicis.push(new Montaña);
        } else {
            this.tBicis.push(new Bicicleta);
        }

        if (this.tBicis.includes(bicicleta)) return true;
        else return false;
    }

    ventaBici(sLocalizador) {
        const bicicleta = this.tBicis.find(bici => bici.localizador === sLocalizador);

        if (bicicleta) {
            bicicleta.vendida = true; 
            this.numVentas++;
            return `Bicicleta vendida con localizador: ${sLocalizador}. Vendida: ${bicicleta.vendida ? 'Si' : 'No'}`;
        } else {
            return `No se ha podido vender la bicicleta con localizador: ${sLocalizador}`;
        }
    }

    listadoCarretera(){

        let bicisCarreteras = [];
        this.tBicis.filter((b)=> {if(b instanceof Carretera) bicisCarreteras.push(b)});
        let tabla = `<table>
                        <thead>
                            <th>Localizador</th>
                            <th>Año</th>
                            <th>Vendida</th>
                            <th>Numero de Platos</th>
                        </thead>
                        <tbody>`;
        
        bicisCarreteras.map((b)=>{
            tabla += `<tr>
                        <td>${b.localizador}</td>
                        <td>${b.año}</td>
                        <td>${b.vendida}</td>
                        <td>${b.numPlatos}</td>
                      </tr>`
        })
        tabla += `</tbody></table>`;

        return tabla;
    }

    listadoMontania(){
        let bicisMontania = [];

        this.tBicis.filter((b)=> {if(b instanceof Montaña) bicisMontania.push(b)});
        let tabla = `<table>
                        <thead>
                            <th>Localizador</th>
                            <th>Año</th>
                            <th>Vendida</th>
                            <th>Numero de Platos</th>
                        </thead>
                        <tbody>`;
        
        bicisCarreteras.map((b)=>{
            tabla += `<tr>
                        <td>${b.localizador}</td>
                        <td>${b.año}</td>
                        <td>${b.vendida}</td>
                        <td>${b.numSuspensiones}</td>
                      </tr>`
        })
        tabla += `</tbody></table>`;

        return tabla;
    }

    listadoGeneral(){
        let tabla = `<table>
                        <thead>
                            <th>Localizador</th>
                            <th>Año</th>
                            <th>Vendida</th>
                            <th>Numero de Platos/Suspensiones</th>
                        </thead>
                        <tbody>`;
        
        this.tBicis.map((b)=>{
            tabla += `<tr>
                        <td>${b.localizador}</td>
                        <td>${b.año}</td>
                        <td>${b.vendida}</td>
                        <td>${b instanceof Carretera ? b.numPlatos : b instanceof Montaña ? b.numSuspensiones : ''}</td>
                      </tr>`
        })
        tabla += `</tbody></table>`;

        return tabla;
    }
}



/////////////////
//BICICLETA
////////////////

function Bicicleta(localizador, año) {
    this.localizador = localizador;
    this.año = año;
    this.vendida = false;
}

Bicicleta.prototype.toHTMLrow = function () {
    return `<tr>
        <td>${this.localizador}</td>
        <td>${this.año}</td>
        <td>${this.vendida ? 'Sí' : 'No'}</td>
    </tr>`;
}

//////////////
//CARRETERA
//////////////
function Carretera(localizador, año, numPlatos) {
    Bicicleta.call(this, localizador, año, vendida); //Importante el this
    this.numPlatos = numPlatos;
}

Carretera.prototype.toHTMLrow = function () { //Sobreescribimos el método padre
    return `<tr>
        <td>${this.localizador}</td>
        <td>${this.año}</td>
        <td>${this.vendida ? 'Sí' : 'No'}</td>
        <td>${this.numPlatos}</td>
    </tr>`;
}

Object.setPrototypeOf(Carretera.prototype, Bicicleta.prototype); //Declaramos la herencia 
Carretera.prototype.constructor = Carretera;



//////////////
//MONTAÑA
/////////////

function Montaña(localizador, año, numSuspensiones) {
    Bicicleta.call(this, localizador, año, vendida);
    this.numSuspensiones = numSuspensiones;
}

Montaña.prototype.toHTMLrow = function () {
    Carretera.prototype.toHTMLrow = function () { //Sobreescribimos el método padre
        return `<tr>
        <td>${this.localizador}</td>
        <td>${this.año}</td>
        <td>${this.vendida ? 'Sí' : 'No'}</td>
        <td>${this.numPlatos}</td>
        <td>${this.numSuspensiones}</td>
        </tr>`;
    }
}

Object.setPrototypeOf(Montaña.prototype, Bicicleta.prototype);
Montaña.prototype.constructor = Montaña;