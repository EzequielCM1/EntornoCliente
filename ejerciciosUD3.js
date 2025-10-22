"use strict";

////
//funciones
///


///
//main
///
/*
let r = "Firefox/117.0";
let cuenta = 0;




 for (let i = 0; i <= r.length ; i++){

    const numero = Number(r[i]);
    if(!isNaN(numero)){
        cuenta += numero;
   0 }
 }


// alert(cuenta);

*/
////////
// act 6

cadena = "* Uno\n* Dos\n* Tres \n* Cuatro\n";

function etiquetar(){
    const resultado= cadena;
    resultado.split("\n*");
    let sol = "<ul>";

    for (let e = 0; e <= resultado.length ; e++){
        let elem = Arraylist[e];
        elem = elem.slice(2).trim();

        if(elem!="")
            sol += `<li>${elem}</li>`;
    }

    

    sol += "</ul>";
    return sol;
}


console.log( etiquetar());

//// 7
