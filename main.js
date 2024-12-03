document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".boton");
    const iframe = document.getElementById("iframe-contenido");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const url = boton.getAttribute("data-url");
            iframe.src = url;
        });
    });
});
