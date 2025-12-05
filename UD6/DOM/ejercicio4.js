"use strict";

const alumnoList = document.getElementById('alumnos');
const aprobadosList = document.getElementById('aprobados');
const suspensosList = document.getElementById('suspensos');


function getSelectedEstado(){
    return document.querySelector('input[name="estado"]:checked').value;
}

function moverAlumno(event){
    const li = event.target;
    const parentId = li.parentElement.id;

    if(parentId === 'alumnos'){
        const estado = getSelectedEstado();
        if(estado === "aprobado"){
            aprobadosList.appendChild(li);
        }else if (estado === "suspenso"){
            suspensosList.insertBefore(li, suspensosList.firstChild);
        }
    }else if (parentId === "suspensos"){
        alumnoList.appendChild(li);
    }

}


function addClickListeners(list){
    list.addEventListener('click', function(e) {
        if(e.target.tagName === 'LI') {
          moverAlumno(e);
        }
});
}

addClickListeners(alumnoList);
addClickListeners(suspensosList);
addClickListeners(aprobadosList);

// const alumnosList = document.getElementById('alumnos');
//     const aprobadosList = document.getElementById('aprobados');
//     const suspensosList = document.getElementById('suspensos');

//     function getSelectedEstado() {
//       return document.querySelector('input[name="estado"]:checked').value;
//     }

//     // Función para mover un alumno
//     function moverAlumno(event) {
//       const li = event.target;
//       const parentId = li.parentElement.id;

//       if (parentId === 'alumnos') {
//         const estado = getSelectedEstado();
//         if (estado === 'aprobado') {
//           // Mover al final de la lista de aprobados
//           aprobadosList.appendChild(li);
//         } else if (estado === 'suspenso') {
//           // Mover al inicio de la lista de suspensos
//           suspensosList.insertBefore(li, suspensosList.firstChild);
//         }
//       } else if (parentId === 'suspensos') {
//         // Volver a la lista de alumnos
//         alumnosList.appendChild(li);
//       }
//     }

//     // Añadir listener a todas las listas que puedan moverse
//     function addClickListeners(list) {
//       list.addEventListener('click', function(e) {
//         if(e.target.tagName === 'LI') {
//           moverAlumno(e);
//         }
//       });
//     }

//     addClickListeners(alumnosList);
//     addClickListeners(suspensosList);

