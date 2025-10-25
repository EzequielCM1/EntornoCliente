'use strict';

/*
const mayoredad = (a)=> {
    if (a>=18) 
       return true 
    else
    return edad;
};

alert(edad(19));
*/
const mayor = edad => edad >= 18;

alert(mayor(6));
////////////////////

const media = (...resto) => {
    let calculo = 0;
    for (let e = 0; e < resto.length; e++) {
        calculo += resto[e]
    }
    if (resto.length != 0) 
    return calculo/resto.length;
    return 0;
    
}

alert(media(1,2,34,56));


/////////////////

const menor = (a,b) => { 
    if (a>b){
        return b;
    }else{
        return a;
    }

}

alert(menor(5,6));