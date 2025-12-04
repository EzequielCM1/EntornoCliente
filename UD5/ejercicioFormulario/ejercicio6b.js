document.addEventListener("DOMContentLoaded", () => {
  const dialogo = document.getElementById("dialog");
  const fecha = document.getElementById("fecha");
  const yearInput = document.getElementById("anio");
  yearInput.max = new Date().getFullYear();

  // Activar/desactivar fecha
  document.querySelectorAll("input[name='nac']").forEach(r => {
    r.addEventListener("change", () => {
      const activar = r.value === "si";
      fecha.style.opacity = activar ? "1" : "0.5";
      document.getElementById("dia").required = activar;
      document.getElementById("mes").required = activar;
      document.getElementById("anio").required = activar;
    });
  });

  form.addEventListener("submit", e => {
    e.preventDefault();

    let errores = [];

    // PIN iguales
    if (pin1.value !== pin2.value)
        errores.push("Los PIN deben coincidir.");

    // Colores
    const colores = [...document.querySelectorAll(".col:checked")];
    if (colores.length !== 2)
        errores.push("Debes elegir exactamente 2 colores.");

    if (errores.length) {
      dialogo.innerHTML = `
        <p>${errores.join("<br>")}</p>
        <button id="cerrar">Cerrar</button>
      `;
      dialogo.showModal();
      document.getElementById("cerrar").onclick = () => dialogo.close();
      return;
    }

    // Color de fondo
    const c1 = colores[0].value, c2 = colores[1].value;
    const mezcla = {
      "rojo+azul": "purple",
      "azul+rojo": "purple",
      "rojo+verde": "yellow",
      "verde+rojo": "yellow",
      "azul+verde": "turquoise",
      "verde+azul": "turquoise"
    };
    document.body.style.backgroundColor = mezcla[c1 + "+" + c2];

    form.submit();
  });
});
