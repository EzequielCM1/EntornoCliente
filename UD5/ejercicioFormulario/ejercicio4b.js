"use strict";

const votos = [];
const notice = document.querySelector(".notice");

// --- FUNCIÓN PARA ACTUALIZAR LA NOTICE ---
function actualizarResultados() {
    const sabores = ["vainilla", "fresa", "chocolate", "nata"];
    let html = "<h3>Resultados actuales</h3>";

    sabores.forEach(sabor => {
        const votosSabor = votos.filter(v => v.sabor === sabor);
        const cantidad = votosSabor.length;

        const media = cantidad > 0
            ? (votosSabor.reduce((acc, v) => acc + v.nota, 0) / cantidad).toFixed(2)
            : 0;

        const vecesMax = votosSabor.filter(v => v.nota === 5).length;

        html += `
            <p>
                <strong>${sabor.toUpperCase()}:</strong><br>
                Votos: ${cantidad}<br>
                Media: ${media}<br>
                Veces con 5 puntos: ${vecesMax}
            </p>
        `;
    });

    notice.innerHTML = html;
}


// --- BOTÓN VOTAR ---
document.querySelector("#votar").addEventListener("click", () => {
    const tipo = document.querySelector("#helados").value;
    const notaSeleccionada = document.querySelector('input[name="nota"]:checked');

    if (!notaSeleccionada) {
        alert("Debes seleccionar una nota.");
        return;
    }

    const nota = Number(notaSeleccionada.value);

    votos.push({ sabor: tipo, nota });

    actualizarResultados(); // <<--- ACTUALIZA AUTOMÁTICAMENTE
});
