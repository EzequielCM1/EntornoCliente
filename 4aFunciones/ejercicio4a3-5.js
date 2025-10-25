function camelizar(cadena) {
  return cadena
    .toLowerCase()
    .split('-')
    .map((palabra, i) => i === 0 ? palabra : palabra[0].toUpperCase() + palabra.slice(1))
    .join('');
}

console.log("Ejercicio 4b-3:");
console.log(camelizar("En-un-lugar-de-la-Mancha"));

function capitalizarNombresSimple(arr) {
  return arr.map(n => n[0].toUpperCase() + n.slice(1).toLowerCase());
}

console.log("\nEjercicio 4b-3b (nombres simples):");
let nombres1 = ["joRge", "ana", "PEDRO", "jUAn"];
console.log(capitalizarNombresSimple(nombres1));

function capitalizarNombresCompuestos(arr) {
  return arr.map(nombre =>
    nombre
      .split(" ")
      .map(p => p[0].toUpperCase() + p.slice(1).toLowerCase())
      .join(" ")
  );
}

console.log("\nEjercicio 4b-3b (nombres compuestos):");
let nombres2 = ["joRge juAN", "ana", "PEDRO joSé", "jUAn PeDRo"];
console.log(capitalizarNombresCompuestos(nombres2));

function obtenerVocales(palabra) {
  return palabra.match(/[aeiouáéíóú]/gi) || [];
}

console.log("\nEjercicio 4b-4:");
console.log(obtenerVocales("Programación"));

function modificarCoches(coches) {
  coches.splice(2, 0, "Seat");
  coches[2] = "Mitsubishi";
  coches = coches.filter(c => c.length > 4);
  let resultado = [];
  coches.forEach(c => {
    resultado.push(c, c.length);
  });
  return resultado;
}

console.log("\nEjercicio 4b-5:");
let marcas = ["Mazda", "Peugeot", "Renault", "Nissan", "Kia"];
console.log(modificarCoches(marcas));
