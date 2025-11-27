'use strict';

////////////
//funciones
////////////


function guardarNotas() {

    const titulo = document.querySelector('#titulo').value;
    const areaLista = document.querySelector('#areaLista').value;

    let arrNotas;

    if (localStorage.Notas) {
        arrNotas = JSON.parse(localStorage.Notas);
    }
    else {
        arrNotas = [];
    }

    let nuevaNota = [titulo, areaLista];

    arrNotas.push(nuevaNota);

      localStorage.Notas = JSON.stringify( arrNotas);
}



////////////
//Main
///////////


const btnGuardar = document.querySelector('#guardar').addEventListener('click', guardarNotas);

