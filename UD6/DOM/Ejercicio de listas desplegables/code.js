"use strict";

const provincia = document.querySelector('#txtProvincia');
const codigo = document.querySelector("#txtCodProvincia");

const listaIzquierda = document.querySelector('#lstIzquierda');
const listaderecha = document.querySelector('#lstDerecha');

const chkClonar = document.querySelector('#chkClonar-0');


document.querySelector('#btnAgregar').addEventListener("click", () => {

    if (provincia.value.trim() === "") {
        alert("Debes indicar la provincia");
        return;
    }
    if (codigo.value.trim() === "") {
        alert("Debes indicar el codigo de la provincia");
        return;
    }

    const option = document.querySelector('option');
    option.value = codigo.value.trim();
    option.textContent = provincia.value.trim();
    
    listaIzquierda.appendChild(option);

    provincia.value = "";
    codigo.value = "";

});


document.querySelector('#btnDerecha').addEventListener("click", () =>{
    moverSeleccionados(listaIzquierda, listaderecha);
});

document.querySelector('#btnIzquierda').addEventListener("click", () =>{
    moverSeleccionados(listaIzquierda, listaderecha);
});

document.querySelector('#btnMoverTodoIzquierda').addEventListener("click", () =>{
    moverTodos(listaIzquierda, listaderecha);
});

document.querySelector('#btnMoverTodoDerecha').addEventListener("click", () =>{
    moverTodos(listaIzquierda, listaderecha);
});

document.querySelector('#btnBorrarIzquierda').addEventListener("click", () =>{
    borrarSeleccionados(listaIzquierda);
});

document.querySelector('#btnBorrarDerecha').addEventListener("click", () =>{
    borrarSeleccionados(listaderecha);
});

document.querySelector('#btnListarIzquierda').addEventListener("click", () =>{
    listaContenido(listaIzquierda, "Lista izquierda");
});

document.querySelector('#btnListarDerecha').addEventListener("click", () =>{
    listaContenido(listaderecha, "Lista derecha");
});


// // --------------------------------------------------------------
// //   FUNCIONES AUXILIARES
// // --------------------------------------------------------------

function moverSeleccionados(origen , destino){
    const seleccionados = Array.from(origen.selectedOptions);

    seleccionados.forEach(opt => {
        if(chkClonar.checked) {
            const copia = opt.cloneNode(true);
            destino.appendChild(copia);
        }else{
            destino.appendChild(opt);
        }
    })

}

function moverTodos(origen, destino){
    const opciones = Array.from(origen.opciones);

    opciones.forEach(opt => {
        if(chkClonar.checked){
            destino.appendChild(opt.cloneNode(true));
        }else{
            destino.appendChild(opt);
        }
    })
}


function borrarSeleccionados(lista){
    const seleccionados = Array.from(lista.selectedOptions);
    seleccionados.forEach(opt => opt.remove());
}

function listaContenido(lista, titulo){
    let salida = `${titulo}:\n`;

    if(lista.options.length === 0){
        salida += "vacia";
    }else{
        Array.from(lista.options).forEach(opt => {
            salida += `${opt.value} - ${opt.textContent}\n`;
        })
    }
    alert(salida);
}
