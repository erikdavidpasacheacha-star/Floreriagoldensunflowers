// Botón hamburguesa y barra de menú
const botonMenu = document.querySelector(".header-toggle");
const iconoMenu = botonMenu.querySelector("i");
const menu = document.querySelector(".header-menu");

function abrirCerrar(abrir) {
    menu.classList.toggle("active", abrir);
    botonMenu.setAttribute("aria-expanded", abrir);
    // Cambia el ícono: hamburguesa <-> X (Font Awesome)
    iconoMenu.classList.toggle("fa-bars", !abrir);
    iconoMenu.classList.toggle("fa-xmark", abrir);
}

// Click en la hamburguesa
botonMenu.addEventListener("click", function () {
    abrirCerrar(!menu.classList.contains("active"));
});

// Cerrar al elegir un enlace
menu.querySelectorAll("a").forEach(function (enlace) {
    enlace.addEventListener("click", function () { abrirCerrar(false); });
});

// Cerrar con Escape o al hacer click fuera del menú
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") abrirCerrar(false);
});
document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !botonMenu.contains(e.target)) abrirCerrar(false);
});
