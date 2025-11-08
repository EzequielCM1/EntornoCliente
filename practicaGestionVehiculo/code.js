"use strict";

///
//funciones
const listaVehiculo = [];

function agregarVehiculo(){
    const tipovehiculo = document.querySelector('input[name="tipo"]:checked').value;

    const marca = document.querySelector("#marca").value;
    const modelo = document.querySelector("#modelo").value;
    const año = parseInt(document.querySelector("#año").value);
    const precio = parseFloat(document.querySelector("#precio").value);
    const stock = document.querySelector("#stock").checked;
    const matricula = document.querySelector("#matricula").value;

    let nuevoVehiculo;

    if(tipovehiculo == "coche"){
      const puertas =parseInt(document.querySelector("#puertas").value);
      const Combustible = document.querySelector("#tipo").value;

      nuevoVehiculo = new Coche(marca, modelo, año, precio, stock, puertas, matricula, Combustible);

    }else{
      const tipoMoto = document.querySelector("#tipoMoto").value;
      const cilindrada = parseInt(document.querySelector("#cilindrada").value);
      nuevoVehiculo = new Motocicleta(marca, modelo,  año, precio, stock, matricula, cilindrada, tipoMoto );
    }

    listaVehiculo.push(nuevoVehiculo);
    alert("vehiculo agregado");
    document.querySelector("#formVehiculo").reset();

}


function mostrarLista (){
  const salida = document.getElementById("mostrarLista");
  if(listaVehiculo.length === 0 ){
    salida.textContent = "No hay vehiculos registrados";
    return;
  }

  let texto = "<ul>";
  listaVehiculo.forEach((vehiculo, i ) =>{
    texto += `<li>${i + 1}. ${vehiculo.obtenerDescripcion()}</li>`;
  })
  texto += "</ul>";
  salida.innerHTML = texto;

}
/////
//main

document.getElementById("btnAgregar").addEventListener("click", agregarVehiculo);
document.getElementById("btnMostrar").addEventListener("click", mostrarLista);
