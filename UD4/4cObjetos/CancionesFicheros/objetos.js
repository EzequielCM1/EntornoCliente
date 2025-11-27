"use strict";

class Fichero {
  constructor(nombreFichero, tamanio) {
    this.nombreFichero = nombreFichero;
    this.tamanio = tamanio;
  }

  extension() {
    const partes = this.nombreFichero.split(".");
    return partes.length > 1 ? partes.pop() : "sin extensión";
  }

  getDatos() {
    return `Fichero: ${this.nombreFichero} (${this.tamanio} MB)`;
  }
}

class Cancion extends Fichero {
  constructor(nombreFichero, tamanio, nombreCancion, duracion) {
    super(nombreFichero, tamanio);
    this.nombreCancion = nombreCancion;
    this.duracion = duracion;
  }

  getDatos() {
    return `Canción: ${this.nombreCancion}, ${this.duracion} min, tamaño ${this.tamanio} MB`;
  }
}
