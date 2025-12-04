"use strict";

  // Botón para cambiar el color de fondo de los botones
        document.getElementById("btnColor").addEventListener("click", function () {
            const buttons = document.querySelectorAll("button");
            buttons.forEach(btn => {
                btn.style.backgroundColor = "#47adad";
            });
        });

        // Botón para alternar entre modo claro y oscuro (cambia la hoja de estilos)
        const btnModo = document.getElementById("btnModo");
        const themeLink = document.getElementById("themeStylesheet");

        btnModo.addEventListener("click", function () {
            if (themeLink.getAttribute("href") === "style-light.css") {
                themeLink.setAttribute("href", "style-dark.css");
            } else {
                themeLink.setAttribute("href", "style-light.css");
            }
        });