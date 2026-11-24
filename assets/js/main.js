
/* ========================================
   1. MENÚ HAMBURGUESA
======================================== */

const botonMenu = document.querySelector(".header-toggle");
const menu = document.querySelector(".header-menu");

if (botonMenu && menu) {

    const iconoMenu = botonMenu.querySelector("i");

    botonMenu.addEventListener("click", function () {

        menu.classList.toggle("activo");

        const abierto = menu.classList.contains("activo");

        botonMenu.setAttribute("aria-expanded", abierto);

        if (iconoMenu) {
            iconoMenu.classList.toggle("fa-bars", !abierto);
            iconoMenu.classList.toggle("fa-xmark", abierto);
        }

    });

    // Cerrar menú al seleccionar una página
    const enlaces = menu.querySelectorAll("a");

    enlaces.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            menu.classList.remove("activo");
            botonMenu.setAttribute("aria-expanded", "false");

            if (iconoMenu) {
                iconoMenu.classList.remove("fa-xmark");
                iconoMenu.classList.add("fa-bars");
            }

        });

    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener("click", function (evento) {

        if (
            !menu.contains(evento.target) &&
            !botonMenu.contains(evento.target)
        ) {

            menu.classList.remove("activo");
            botonMenu.setAttribute("aria-expanded", "false");

            if (iconoMenu) {
                iconoMenu.classList.remove("fa-xmark");
                iconoMenu.classList.add("fa-bars");
            }

        }

    });

}


/* ========================================
   2. FILTROS DE GALERÍA
======================================== */

const filtros = document.querySelectorAll(".filtro");
const productos = document.querySelectorAll(".producto");

filtros.forEach(function (filtro) {

    filtro.addEventListener("click", function () {

        filtros.forEach(function (boton) {
            boton.classList.remove("active");
        });

        filtro.classList.add("active");

        const categoria = filtro.getAttribute("data-categoria");

        productos.forEach(function (producto) {

            const categoriaProducto = producto.getAttribute("data-categoria");

            if (
                categoria === "todos" ||
                categoria === categoriaProducto
            ) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }

        });

    });

});


/* ========================================
   3. COMPLETAR PRODUCTO DESDE LA URL
======================================== */

const parametros = new URLSearchParams(window.location.search);

const productoURL = parametros.get("producto");
const ocasionURL = parametros.get("ocasion");

const campoProducto = document.querySelector("#producto");

if (campoProducto) {

    if (productoURL) {
        campoProducto.value = productoURL;
    }

    if (ocasionURL) {
        campoProducto.value = "Arreglo para " + ocasionURL;
    }

}


/* ========================================
   4. FECHA MÍNIMA DEL PEDIDO
======================================== */

const campoFecha = document.querySelector("#fecha");

if (campoFecha) {

    const hoy = new Date();

    const anio = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, "0");
    const dia = String(hoy.getDate()).padStart(2, "0");

    campoFecha.min = anio + "-" + mes + "-" + dia;

}


/* ========================================
   5. FORMULARIO DE PEDIDOS
======================================== */

const formulario = document.querySelector("#formPedido");

if (formulario) {

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const nombre = document.querySelector("#nombre")?.value.trim() || "";
        const telefono = document.querySelector("#telefono")?.value.trim() || "";
        const producto = document.querySelector("#producto")?.value.trim() || "";
        const fecha = document.querySelector("#fecha")?.value || "";
        const distrito = document.querySelector("#distrito")?.value.trim() || "";
        const direccion = document.querySelector("#direccion")?.value.trim() || "";
        const detalles = document.querySelector("#detalles")?.value.trim() || "";
        const mensaje = document.querySelector("#mensaje")?.value.trim() || "";

        const textoWhatsApp =
            "¡Hola, Goldensunflowers! 🌻 Quisiera realizar un pedido.\n\n" +
            "Nombre: " + nombre + "\n" +
            "Teléfono: " + telefono + "\n" +
            "Producto u ocasión: " + producto + "\n" +
            "Fecha deseada: " + fecha + "\n" +
            "Distrito: " + distrito + "\n" +
            "Dirección: " + direccion + "\n" +
            "Detalles adicionales: " + detalles + "\n" +
            "Mensaje: " + mensaje + "\n\n" +
            "Quisiera consultar la disponibilidad y el costo del delivery. ¡Gracias!";

        const numeroWhatsApp = "51917620646";

        const enlaceWhatsApp =
            "https://wa.me/" + numeroWhatsApp +
            "?text=" + encodeURIComponent(textoWhatsApp);

        window.open(enlaceWhatsApp, "_blank");

    });

}


/* ========================================
   6. BOTÓN VOLVER ARRIBA
======================================== */

const botonSubir = document.querySelector(".scroll-up");

if (botonSubir) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
            botonSubir.classList.add("visible");
        } else {
            botonSubir.classList.remove("visible");
        }

    });

    botonSubir.addEventListener("click", function (evento) {

        evento.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
