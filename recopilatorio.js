'use strict';

///////////
//Funciones

const crearTarea = () => {
    //recuperamos la tarea
    const tarea = document.querySelector('#tarea');
    const textoTarea = tarea.value.trim();
    
    // comprobamos si esta vacio
 if (!textoTarea) { // siino ha esccrito nsfs salimos de la funcion 
    return;
 } 
 // añadimos 
 arrTareas.push(textoTarea);

    // guardamos 
localStorage.tareas = JSON.stringify(arrTareas);
    //mostrar
 let mensaje = "<ul>";
    for (let tarea of arrTareas){
        mensaje += "<li></li>"
    }
  mensaje += "</ul>";

}


/////////////
//Main



const btnCrearTarea = document.querySelector("#bntCrearTarea");
btnCrearTarea.addEventListener("click", crearTarea);

////mirar si hay tareas guardadas
let arrTareas;
if (localStorage.tareas) {
    arrTareas = JSON.parse(localStorage.tareas)
}else{
    arrTareas = [];

}