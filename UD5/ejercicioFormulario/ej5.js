"use strict";

const div = document.getElementById("divEditable");
let fontSize = 16; // tamaño inicial

div.addEventListener("keydown", (e) => {

    if (e.ctrlKey) {
        e.preventDefault(); // Evitar el atajo del navegador

        // CTRL + B → NEGRITA
        if (e.key.toLowerCase() === "b") {
            document.execCommand("bold");
        }

        // CTRL + I → CURSIVA
        else if (e.key.toLowerCase() === "i") {
            document.execCommand("italic");
        }

        // CTRL + U → SUBRAYADO
        else if (e.key.toLowerCase() === "u") {
            document.execCommand("underline");
        }

        // CTRL + + → AUMENTAR TAMAÑO LETRA
        else if (e.key === "+" || e.key === "=") {
            fontSize += 2;
            div.style.fontSize = fontSize + "px";
        }

        // CTRL + - → DISMINUIR TAMAÑO LETRA
        else if (e.key === "-") {
            fontSize -= 2;
            if (fontSize < 6) fontSize = 6; // límite para no hacerla invisible
            div.style.fontSize = fontSize + "px";
        }
    }
});
