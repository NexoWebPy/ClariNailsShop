/* =========================================================
   CLARI NAILS SHOP
   SCRIPT PRINCIPAL
   VERSIÓN FINAL - CARRITO CORREGIDO
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CONFIGURACIÓN
    ===================================================== */

    const CONFIG = {
        nombre: "Clari Nails Shop",
        whatsapp: "595971670704",
        instagram: "https://www.instagram.com/clarinails.shop/",
        moneda: "Gs.",
        imagenFallback: "fotoLogo.jpg"
    };


    /* =====================================================
       PRODUCTOS
    ===================================================== */

    const productos = [
        { id: 1, name: "Decoración para Uñas Charm Limit", price: 25000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_002.jpg" },
        { id: 2, name: "Aceite Revitalizador de Cutículas Eloise", price: 12000, category: "Cuidado de Uñas", image: "ClariShop_003.jpg" },
        { id: 3, name: "Aceite Revitalizador de Cutículas Eloise", price: 15000, category: "Cuidado de Uñas", image: "ClariShop_005.jpg" },
        { id: 4, name: "Polímero Acrílico QBD White", price: 60000, category: "Insumos para Uñas Acrílicas", image: "ClariShop_007.jpg" },
        { id: 5, name: "Polvo Acrílico Acryfine Summer Style (Clear)", price: 130000, category: "Insumos para Uñas Acrílicas", image: "ClariShop_009.jpg" },
        { id: 6, name: "Polímero Acrílico de Colores Eloise", price: 45000, category: "Insumos para Uñas Acrílicas", image: "ClariShop_011.jpg" },
        { id: 7, name: "Polvo Acrílico Acryfine Summer Style (Cover)", price: 130000, category: "Insumos para Uñas Acrílicas", image: "ClariShop_013.jpg" },
        { id: 8, name: "Polvo Acrílico Professional Navi 1154", price: 80000, category: "Insumos para Uñas Acrílicas", image: "ClariShop_015.jpg" },
        { id: 9, name: "Polvo Acrílico Professional Navi 1614", price: 80000, category: "Insumos para Uñas Acrílicas", image: "ClariShop_017.jpg" },
        { id: 10, name: "Polvo Acrílico Professional Navi 1123", price: 80000, category: "Insumos para Uñas Acrílicas", image: "ClariShop_019.jpg" },
        { id: 11, name: "Polímero Acrílico Eloise (30g)", price: 45000, category: "Insumos para Uñas Acrílicas", image: "ClariShop_021.jpg" },
        { id: 12, name: "French Dip Powder Holder", price: 15000, category: "Accesorios y Herramientas para Uñas", image: "ClariShop_023.jpg" },
        { id: 13, name: "Base Gel Long Lasting Navi (10ml)", price: 45000, category: "Insumos para Uñas Acrílicas", image: "ClariShop_025.jpg" },
        { id: 14, name: "Base Gel Long Lasting Navi (15ml)", price: 60000, category: "Insumos para Uñas Acrílicas", image: "ClariShop_027.jpg" },
        { id: 15, name: "Victoria's Secret Amber Romance Shimmer Mist + Loción", price: 0, category: "Cuidado Corporal / Perfumería", image: "ClariShop_029.jpg" },
        { id: 16, name: "Decoración Nails Mirror Eloise", price: 20000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_031.jpg" },
        { id: 17, name: "Decoración Nails Mirror Eloise (Set de 6 piezas)", price: 60000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_033.jpg" },
        { id: 18, name: "Navi Builder Gel 4 en 1 (20ml)", price: 80000, category: "Geles de Construcción", image: "ClariShop_007.jpg" },
        { id: 19, name: "Set de Pinzas / Clips para Remover Esmalte Eloise", price: 60000, category: "Accesorios y Herramientas para Uñas", image: "ClariShop_037.jpg" },
        { id: 20, name: "Cápsula Dual Acrygel Nail Forms - Paris Night", price: 390000, category: "Insumos para Uñas Acrílicas / Dual System", image: "ClariShop_007.jpg" },
        { id: 21, name: "Alicate Profesional para Cutículas Eloise", price: 25000, category: "Herramientas y Accesorios para Manicuría", image: "ClariShop_043.jpg" },
        { id: 22, name: "Cortaúñas Metálico con Lima Incorporada", price: 5000, category: "Herramientas y Accesorios para Manicuría", image: "ClariShop_045.jpg" },
        { id: 23, name: "Loción Corporal Perfumada Victoria's Secret (Variedades)", price: 50000, category: "Cuidado Corporal / Perfumería", image: "ClariShop_047.jpg" },
        { id: 24, name: "Vasito Dappen de Vidrio (Pack de 2)", price: 5000, category: "Accesorios e Insumos para Uñas Acrílicas", image: "ClariShop_049.jpg" },
        { id: 25, name: "Set de Dijes y Joyería para Uñas (Fashion Nail Jewelry)", price: 20000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_051.jpg" },
        { id: 26, name: "Apliques Holográficos y Flores City Girl (Nail Art)", price: 25000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_053.jpg" },
        { id: 27, name: "Surtido de Dijes Kawaii y Lazos KekeStar (Nail Art)", price: 25000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_056.jpg" },
        { id: 28, name: "Dedos de Práctica de Silicona con Uña", price: 10000, category: "Accesorios de Práctica para Manicuría", image: "ClariShop_058.jpg" },
        { id: 29, name: "Dispensador Pump con Tapa Rosada", price: 15000, category: "Accesorios e Insumos para Uñas", image: "ClariShop_060.jpg" },
        { id: 30, name: "Polvo Efecto Espejo City Girl Nail Powder", price: 20000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_062.jpg" },
        { id: 31, name: "Polvo Efecto Espejo y Aurora Set x4", price: 35000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_064.jpg" },
        { id: 32, name: "Polvo Cromo / Efecto Espejo Eloise", price: 15000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_066.jpg" },
        { id: 33, name: "Polvo Cromo Mirror Powder City Girl", price: 20000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_068.jpg" },
        { id: 34, name: "Polvo Efecto Espejo y Holográfico City Girl", price: 20000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_070.jpg" },
        { id: 35, name: "Polvo Efecto Espejo Metálico Charm Limit", price: 20000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_072.jpg" },
        { id: 36, name: "Set x6 Polvos Efecto Espejo y Decoraciones Eloise", price: 60000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_074.jpg" },
        { id: 37, name: "Empujador de Cutículas Metálico Doble de Acero Inoxidable", price: 10000, category: "Herramientas y Accesorios para Manicuría", image: "ClariShop_076.jpg" },
        { id: 38, name: "Esmalte Semipermanente UV/LED Charm Limit (10ml)", price: 20000, category: "Esmaltes y Productos UV/LED", image: "ClariShop_078.jpg" },
        { id: 39, name: "Esmalte Semipermanente UV/LED Charm Limit Individual (10ml)", price: 17000, category: "Esmaltes y Productos UV/LED", image: "ClariShop_080.jpg" },
        { id: 40, name: "Caja de Esmaltes Semipermanentes UV/LED Charm Limit (12 PCS)", price: 180000, category: "Esmaltes y Productos UV/LED", image: "ClariShop_082.jpg" },
        { id: 41, name: "Liner Gel UV/LED Charm Limit (10ml)", price: 15000, category: "Esmaltes y Productos UV/LED", image: "ClariShop_084.jpg" },
        { id: 42, name: "Color Gel LED/UV Soak-Off Heart Bottle Charm Limit (5ml)", price: 15000, category: "Esmaltes y Productos UV/LED", image: "ClariShop_086.jpg" },
        { id: 43, name: "Color Gel LED/UV Charm Limit (11ml)", price: 17000, category: "Esmaltes y Productos UV/LED", image: "ClariShop_088.jpg" },
        { id: 44, name: "Color Gel LED/UV Glitter / Brillos Charm Limit (10ml)", price: 25000, category: "Esmaltes y Productos UV/LED", image: "ClariShop_090.jpg" },
        { id: 45, name: "Laser Drill UV/LED Charm Limit (10ml)", price: 25000, category: "Esmaltes y Productos UV/LED", image: "ClariShop_092.jpg" },
        { id: 46, name: "Gel Polish Vía Láctea Navi (10ml)", price: 20000, category: "Esmaltes y Productos UV/LED", image: "ClariShop_094.jpg" },
        { id: 47, name: "Gel Polish Aurora Navi (6ml - 8ml)", price: 40000, category: "Esmaltes y Productos UV/LED", image: "ClariShop_096.jpg" },
        { id: 48, name: "Lima Banana para Uñas Grano 100/150", price: 10000, category: "Herramientas y Accesorios para Manicuría", image: "ClariShop_098.jpg" },
        { id: 49, name: "Set de Holográficos en forma de Estrella", price: 10000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_100.jpg" },
        { id: 50, name: "Set de Glitter y Efectos Holográficos en Pote", price: 20000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_102.jpg" },
        { id: 51, name: "The Floral Vibes - Flores Secas para Uñas City Girl", price: 25000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_104.jpg" },
        { id: 52, name: "Set x2 Cajas de Decoraciones Variadas y Apliques para Uñas", price: 25000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_106.jpg" },
        { id: 53, name: "Fresa / Punta de Diamante Metálica Plana para Torno", price: 2000, category: "Herramientas y Accesorios para Manicuría", image: "ClariShop_108.jpg" },
        { id: 54, name: "Set x4 Fresas / Puntas Cerámicas y de Tungsteno para Torno", price: 1000000, category: "Herramientas y Accesorios para Manicuría", image: "ClariShop_110.jpg" },
        { id: 55, name: "Solid Cream Gel Charm Limit (15ml)", price: 25000, category: "Esmaltes y Productos UV/LED", image: "ClariShop_112.jpg" },
        { id: 56, name: "Gel para Construcción / UV/LED Gel Navi (15ml)", price: 60000, category: "Esmaltes y Productos UV/LED", image: "ClariShop_114.jpg" },
        { id: 57, name: "Painting Gel UV/LED Navi (8ml)", price: 60000, category: "Esmaltes y Productos UV/LED", image: "ClariShop_116.jpg" },
        { id: 58, name: "Set x3 Gel de Pintura / Painting Gel Eloise (8ml)", price: 15000, category: "Esmaltes y Productos UV/LED", image: "ClariShop_118.jpg" },
        { id: 59, name: "Diamond Glue Gel UV/LED para Strass / Extensión Navi (20ml)", price: 0, category: "Esmaltes y Productos UV/LED", image: "ClariShop_120.jpg" },
        { id: 60, name: "Gel Refrescante Profundo Pedi Ice Gena con Eucalipto y Mentol (250ml)", price: 5000, category: "Cuidado de Pies / Pedicuría", image: "ClariShop_122.jpg" },
        { id: 61, name: "Gel Spider Eloise White", price: 0, category: "Esmaltes y Productos UV/LED", image: "ClariShop_124.jpg" },
        { id: 62, name: "Gel Spider Eloise Black", price: 20000, category: "Esmaltes y Productos UV/LED", image: "ClariShop_126.jpg" },
        { id: 63, name: "Potes de Glitter / Polvo para Uñas", price: 15000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_128.jpg" },
        { id: 64, name: "Set x6 Cajas de Decoración Holográfica para Uñas Eloise", price: 35000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_130.jpg" },
        { id: 65, name: "Set x4 Cajas de Diseños Surtidos de Glitter y Apliques", price: 35000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_132.jpg" },
        { id: 66, name: "Pote Individual de Glitter / Polvo Decorativo Eloise", price: 15000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_134.jpg" },
        { id: 67, name: "Set x6 Cajas Redondas de Apliques Estrellas y Glitter Eloise", price: 35000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_136.jpg" },
        { id: 68, name: "Set Potes de Efecto Espejo / Polvo para Uñas con Aplicador", price: 20000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_138.jpg" },
        { id: 69, name: "Organizador / Surtido a Granel de Potes con Decoraciones Variadas", price: 10000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_140.jpg" },
        { id: 70, name: "Set de Cajas Grandes x12 Compartimentos de Decoración Holográfica", price: 70000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_142.jpg" },
        { id: 71, name: "Set x12 Cajas de Decoración Variada / Apliques de Estrellas", price: 7000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_143.jpg" },
        { id: 72, name: "Set x2 Blisters de Decoración y Apliques Surtidos Eloise", price: 80000, category: "Decoración de Uñas / Nail Art", image: "ClariShop_145.jpg" },
        { id: 73, name: "Termo Stanley Color Lila / Violeta con Tapa y Manija", price: 0, category: "Accesorios y Varios", image: "ClariShop_148.jpg" },
        { id: 74, name: "Cabina UV/LED Profesional Sun X5 Plus (Color Blanco)", price: 180000, category: "Equipamiento y Aparatología", image: "ClariShop_149.jpg" },
        { id: 75, name: "Cabina UV/LED Profesional Sun X5 Plus (Color Rosado)", price: 180000, category: "Equipamiento y Aparatología", image: "ClariShop_151.jpg" }
    ];


    /* =====================================================
       VARIABLES
    ===================================================== */

    let categoriaActual = "todos";
    let carrito = [];


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const productsContainer = document.getElementById("products");
    const noProducts = document.getElementById("noProducts");

    const searchInput = document.getElementById("searchInput");
    const clearSearch = document.getElementById("clearSearch");
    const resetFilters = document.getElementById("resetFilters");

    const categoriesContainer = document.getElementById("categories");

    const cart = document.getElementById("cart");
    const cartProducts = document.getElementById("cartProducts");
    const cartCount = document.getElementById("cartCount");
    const desktopCartCount = document.getElementById("desktopCartCount");
    const cartTotal = document.getElementById("cartTotal");

    const openCart = document.getElementById("openCart");
    const openCartDesktop = document.getElementById("openCartDesktop");

    const closeCart = document.getElementById("closeCart");
    const clearCart = document.getElementById("clearCart");
    const continueShopping = document.getElementById("continueShopping");
    const sendWhatsApp = document.getElementById("sendWhatsApp");

    const emptyCart = document.getElementById("emptyCart");
    const overlay = document.getElementById("overlay");

    const menuButton = document.getElementById("menuButton");
    const nav = document.getElementById("nav");

    const currentYear = document.getElementById("currentYear");
    const preloader = document.getElementById("preloader");


    /* =====================================================
       CARGAR CARRITO
    ===================================================== */

    try {

        const carritoGuardado =
            localStorage.getItem("clariNailsCarrito");

        if (carritoGuardado) {

            const datos =
                JSON.parse(carritoGuardado);

            if (Array.isArray(datos)) {

                carrito = datos
                    .filter(function (item) {

                        return (
                            item &&
                            Number.isInteger(Number(item.id)) &&
                            Number(item.quantity) > 0
                        );

                    })
                    .map(function (item) {

                        return {
                            id: Number(item.id),
                            quantity: Number(item.quantity)
                        };

                    });

            }
        }

    } catch (error) {

        console.warn(
            "No se pudo cargar el carrito:",
            error
        );

        carrito = [];
    }


    /* =====================================================
       PRECIO
    ===================================================== */

    function formatearPrecio(numero) {

        return (
            CONFIG.moneda +
            " " +
            Number(numero || 0).toLocaleString("es-PY")
        );

    }


    /* =====================================================
       NORMALIZAR TEXTO
    ===================================================== */

    function normalizarTexto(texto) {

        return String(texto || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

    }


    /* =====================================================
       CATEGORÍAS
    ===================================================== */

    function perteneceCategoria(producto, categoria) {

        if (
            !categoria ||
            categoria === "todos" ||
            categoria === "all"
        ) {
            return true;
        }

        const cat =
            normalizarTexto(producto.category);

        const filtro =
            normalizarTexto(categoria);


        if (
            filtro === "decoracion" ||
            filtro === "nail art"
        ) {
            return cat.includes("decoracion");
        }


        if (filtro === "esmaltes") {

            return (
                cat.includes("esmalte") ||
                cat.includes("uv/led")
            );

        }


        if (
            filtro === "acrilicas" ||
            filtro === "acrilica"
        ) {

            return (
                cat.includes("acrilica") ||
                cat.includes("acrygel") ||
                cat.includes("dual") ||
                cat.includes("construccion")
            );

        }


        if (filtro === "herramientas") {

            return (
                cat.includes("herramienta") ||
                cat.includes("torno") ||
                cat.includes("practica") ||
                cat.includes("accesorio")
            );

        }


        if (filtro === "cuidado") {

            return cat.includes("cuidado");

        }


        if (filtro === "equipamiento") {

            return cat.includes("equipamiento");

        }


        return true;
    }


    /* =====================================================
       IMAGEN
    ===================================================== */

    function imagenProducto(producto) {

        return producto.image ||
               CONFIG.imagenFallback;

    }


    /* =====================================================
       MOSTRAR PRODUCTOS
    ===================================================== */

    function mostrarProductos() {

        if (!productsContainer) {
            return;
        }


        const busqueda =
            searchInput
                ? normalizarTexto(searchInput.value)
                : "";


        const productosFiltrados =
            productos.filter(function (producto) {

                const coincideCategoria =
                    perteneceCategoria(
                        producto,
                        categoriaActual
                    );


                const textoProducto =
                    normalizarTexto(
                        producto.name +
                        " " +
                        producto.category
                    );


                const coincideBusqueda =
                    busqueda === "" ||
                    textoProducto.includes(busqueda);


                return (
                    coincideCategoria &&
                    coincideBusqueda
                );

            });


        productsContainer.innerHTML = "";


        if (
            productosFiltrados.length === 0
        ) {

            if (noProducts) {
                noProducts.classList.remove("hidden");
                noProducts.style.display = "block";
            }

            return;
        }


        if (noProducts) {
            noProducts.classList.add("hidden");
            noProducts.style.display = "none";
        }


        productosFiltrados.forEach(function (producto) {

            const article =
                document.createElement("article");

            article.className =
                "product-card";


            const precioHTML =
                producto.price > 0

                    ? `
                        <div class="product-price">
                            ${formatearPrecio(producto.price)}
                        </div>
                    `

                    : `
                        <div class="product-price consult-price">
                            Consultar precio
                        </div>
                    `;


            const botonHTML =
                producto.price > 0

                    ? `
                        <button
                            class="add-to-cart"
                            data-id="${producto.id}"
                            type="button">

                            <i class="fas fa-cart-plus"></i>
                            Agregar al carrito

                        </button>
                    `

                    : `
                        <button
                            class="consult-product"
                            data-id="${producto.id}"
                            type="button">

                            <i class="fab fa-whatsapp"></i>
                            Consultar por WhatsApp

                        </button>
                    `;


            article.innerHTML = `

                <div class="product-image">

                    <img
                        src="${imagenProducto(producto)}"
                        alt="${producto.name.replace(/"/g, "&quot;")}"
                        loading="lazy">

                </div>


                <div class="product-info">

                    <div class="product-category">
                        ${producto.category}
                    </div>

                    <h3 class="product-name">
                        ${producto.name}
                    </h3>

                    ${precioHTML}

                    ${botonHTML}

                </div>

            `;


            const imagen =
                article.querySelector("img");


            if (imagen) {

                imagen.addEventListener(
                    "error",
                    function () {

                        if (
                            !this.dataset.fallback
                        ) {

                            this.dataset.fallback =
                                "true";

                            this.src =
                                CONFIG.imagenFallback;
                        }

                    }
                );

            }


            productsContainer.appendChild(article);

        });

    }


    /* =====================================================
       GUARDAR CARRITO
    ===================================================== */

    function guardarCarrito() {

        try {

            localStorage.setItem(
                "clariNailsCarrito",
                JSON.stringify(carrito)
            );

        } catch (error) {

            console.warn(
                "No se pudo guardar el carrito:",
                error
            );

        }

    }


    /* =====================================================
       AGREGAR PRODUCTO
    ===================================================== */

    function agregarAlCarrito(id) {

        id = Number(id);


        const producto =
            productos.find(function (item) {

                return item.id === id;

            });


        if (!producto) {
            return;
        }


        if (producto.price <= 0) {

            consultarWhatsApp(producto);

            return;
        }


        const existente =
            carrito.find(function (item) {

                return item.id === id;

            });


        if (existente) {

            existente.quantity += 1;

        } else {

            carrito.push({

                id: id,
                quantity: 1

            });

        }


        guardarCarrito();
        actualizarCarrito();


        /* Abrir carrito automáticamente */

        abrirCarrito();

    }


    /* =====================================================
       ELIMINAR
    ===================================================== */

    function eliminarDelCarrito(id) {

        id = Number(id);


        carrito =
            carrito.filter(function (item) {

                return item.id !== id;

            });


        guardarCarrito();
        actualizarCarrito();

    }


    /* =====================================================
       CAMBIAR CANTIDAD
    ===================================================== */

    function cambiarCantidad(id, cantidad) {

        id = Number(id);


        const item =
            carrito.find(function (producto) {

                return producto.id === id;

            });


        if (!item) {
            return;
        }


        item.quantity += Number(cantidad);


        if (item.quantity <= 0) {

            eliminarDelCarrito(id);

            return;
        }


        guardarCarrito();
        actualizarCarrito();

    }


    /* =====================================================
       ACTUALIZAR CARRITO
    ===================================================== */

    function actualizarCarrito() {

        if (!cartProducts) {
            return;
        }


        cartProducts.innerHTML = "";


        let total = 0;
        let cantidadTotal = 0;
        let productosValidos = 0;


        carrito.forEach(function (item) {

            const producto =
                productos.find(function (p) {

                    return p.id === item.id;

                });


            if (
                !producto ||
                producto.price <= 0
            ) {
                return;
            }


            productosValidos++;


            const subtotal =
                producto.price *
                item.quantity;


            total += subtotal;

            cantidadTotal +=
                item.quantity;


            const div =
                document.createElement("div");


            div.className =
                "cart-item";


            div.innerHTML = `

                <div class="cart-item-image">

                    <img
                        src="${imagenProducto(producto)}"
                        alt="${producto.name.replace(/"/g, "&quot;")}">

                </div>


                <div class="cart-item-info">

                    <h4>
                        ${producto.name}
                    </h4>

                    <p>
                        ${formatearPrecio(producto.price)}
                    </p>


                    <div class="cart-item-controls">

                        <button
                            class="quantity-minus"
                            data-id="${producto.id}"
                            type="button"
                            aria-label="Disminuir cantidad">

                            −

                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            class="quantity-plus"
                            data-id="${producto.id}"
                            type="button"
                            aria-label="Aumentar cantidad">

                            +

                        </button>


                        <button
                            class="remove-item"
                            data-id="${producto.id}"
                            type="button"
                            title="Eliminar">

                            <i class="fas fa-trash"></i>

                        </button>

                    </div>

                </div>

            `;


            const imagen =
                div.querySelector("img");


            if (imagen) {

                imagen.addEventListener(
                    "error",
                    function () {

                        if (
                            !this.dataset.fallback
                        ) {

                            this.dataset.fallback =
                                "true";

                            this.src =
                                CONFIG.imagenFallback;

                        }

                    }
                );

            }


            cartProducts.appendChild(div);

        });


        /* =================================================
           CONTADOR
        ================================================= */

        if (cartCount) {

            cartCount.textContent =
                cantidadTotal;

        }


        if (desktopCartCount) {

            desktopCartCount.textContent =
                cantidadTotal;

        }


        /* =================================================
           TOTAL
        ================================================= */

        if (cartTotal) {

            cartTotal.textContent =
                formatearPrecio(total);

        }


        /* =================================================
           CARRITO VACÍO
        ================================================= */

        const carritoVacio =
            productosValidos === 0;


        if (emptyCart) {

            if (carritoVacio) {

                emptyCart.style.display =
                    "flex";

            } else {

                emptyCart.style.display =
                    "none";

            }

        }


        if (carritoVacio) {

            cartProducts.innerHTML = `

                <div class="cart-empty-message">

                    <i class="fas fa-shopping-bag"></i>

                    <p>
                        Agregá productos para comenzar tu pedido.
                    </p>

                </div>

            `;

        }

    }


    /* =====================================================
       WHATSAPP PRODUCTO
    ===================================================== */

    function consultarWhatsApp(producto) {

        const mensaje =
            "Hola, Clari Nails Shop. 👋\n\n" +
            "Quiero consultar por este producto:\n\n" +
            "💅 " +
            producto.name +
            "\n" +
            "📂 Categoría: " +
            producto.category +
            "\n\n" +
            "¿Me pueden informar el precio y disponibilidad?";


        const url =
            "https://wa.me/" +
            CONFIG.whatsapp +
            "?text=" +
            encodeURIComponent(mensaje);


        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    }


    /* =====================================================
       WHATSAPP PEDIDO
    ===================================================== */

    function enviarPedidoWhatsApp() {

        const productosPedido =
            carrito.filter(function (item) {

                const producto =
                    productos.find(function (p) {

                        return p.id === item.id;

                    });


                return (
                    producto &&
                    producto.price > 0 &&
                    item.quantity > 0
                );

            });


        if (productosPedido.length === 0) {

            alert(
                "Tu carrito está vacío."
            );

            return;
        }


        let mensaje =
            "Hola, Clari Nails Shop. 👋\n\n" +
            "Quiero realizar el siguiente pedido:\n\n";


        let total = 0;


        productosPedido.forEach(
            function (item) {

                const producto =
                    productos.find(function (p) {

                        return p.id === item.id;

                    });


                const subtotal =
                    producto.price *
                    item.quantity;


                total += subtotal;


                mensaje +=
                    "💅 " +
                    producto.name +
                    "\n" +

                    "Cantidad: " +
                    item.quantity +
                    "\n" +

                    "Precio unitario: " +
                    formatearPrecio(
                        producto.price
                    ) +
                    "\n" +

                    "Subtotal: " +
                    formatearPrecio(
                        subtotal
                    ) +
                    "\n\n";

            }
        );


        mensaje +=
            "━━━━━━━━━━━━━━━━━━\n" +
            "💰 TOTAL: " +
            formatearPrecio(total) +
            "\n" +
            "━━━━━━━━━━━━━━━━━━\n\n" +
            "Quedo atento/a a la confirmación.\n" +
            "¡Gracias! 💖";


        const url =
            "https://wa.me/" +
            CONFIG.whatsapp +
            "?text=" +
            encodeURIComponent(mensaje);


        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    }


    /* =====================================================
       ABRIR CARRITO
    ===================================================== */

    function abrirCarrito() {

        document.body.classList.add(
            "cart-open"
        );


        if (cart) {

            cart.classList.add(
                "cart-open"
            );

            cart.classList.add(
                "active"
            );

            cart.classList.add(
                "open"
            );

        }


        if (overlay) {

            overlay.classList.add(
                "active"
            );

            overlay.classList.add(
                "open"
            );

        }

    }


    /* =====================================================
       CERRAR CARRITO
    ===================================================== */

    function cerrarCarrito() {

        document.body.classList.remove(
            "cart-open"
        );


        if (cart) {

            cart.classList.remove(
                "cart-open"
            );

            cart.classList.remove(
                "active"
            );

            cart.classList.remove(
                "open"
            );

        }


        if (overlay) {

            overlay.classList.remove(
                "active"
            );

            overlay.classList.remove(
                "open"
            );

        }

    }


    /* =====================================================
       EVENTOS DE CATEGORÍAS
    ===================================================== */

    if (categoriesContainer) {

        categoriesContainer.addEventListener(
            "click",
            function (event) {

                const boton =
                    event.target.closest(
                        "[data-category]"
                    );


                if (!boton) {
                    return;
                }


                categoriaActual =
                    boton.getAttribute(
                        "data-category"
                    ) || "todos";


                const botones =
                    categoriesContainer.querySelectorAll(
                        "[data-category]"
                    );


                botones.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                boton.classList.add(
                    "active"
                );


                mostrarProductos();

            }
        );

    }


    /* =====================================================
       PRODUCTOS
    ===================================================== */

    if (productsContainer) {

        productsContainer.addEventListener(
            "click",
            function (event) {

                const botonAgregar =
                    event.target.closest(
                        ".add-to-cart"
                    );


                if (botonAgregar) {

                    agregarAlCarrito(
                        botonAgregar.getAttribute(
                            "data-id"
                        )
                    );

                    return;
                }


                const botonConsultar =
                    event.target.closest(
                        ".consult-product"
                    );


                if (botonConsultar) {

                    const producto =
                        productos.find(
                            function (item) {

                                return (
                                    item.id ===
                                    Number(
                                        botonConsultar.getAttribute(
                                            "data-id"
                                        )
                                    )
                                );

                            }
                        );


                    if (producto) {

                        consultarWhatsApp(
                            producto
                        );

                    }

                }

            }
        );

    }


    /* =====================================================
       BOTONES DEL CARRITO
    ===================================================== */

    if (cartProducts) {

        cartProducts.addEventListener(
            "click",
            function (event) {

                const botonMas =
                    event.target.closest(
                        ".quantity-plus"
                    );


                if (botonMas) {

                    cambiarCantidad(
                        botonMas.getAttribute(
                            "data-id"
                        ),
                        1
                    );

                    return;
                }


                const botonMenos =
                    event.target.closest(
                        ".quantity-minus"
                    );


                if (botonMenos) {

                    cambiarCantidad(
                        botonMenos.getAttribute(
                            "data-id"
                        ),
                        -1
                    );

                    return;
                }


                const botonEliminar =
                    event.target.closest(
                        ".remove-item"
                    );


                if (botonEliminar) {

                    eliminarDelCarrito(
                        botonEliminar.getAttribute(
                            "data-id"
                        )
                    );

                }

            }
        );

    }


    /* =====================================================
       BUSCADOR
    ===================================================== */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                mostrarProductos();

            }
        );

    }


    /* =====================================================
       LIMPIAR BUSCADOR
    ===================================================== */

    if (clearSearch) {

        clearSearch.addEventListener(
            "click",
            function () {

                if (searchInput) {

                    searchInput.value = "";

                    searchInput.focus();

                }


                mostrarProductos();

            }
        );

    }


    /* =====================================================
       RESET FILTROS
    ===================================================== */

    if (resetFilters) {

        resetFilters.addEventListener(
            "click",
            function () {

                categoriaActual =
                    "todos";


                if (searchInput) {

                    searchInput.value = "";

                }


                if (categoriesContainer) {

                    const botones =
                        categoriesContainer.querySelectorAll(
                            "[data-category]"
                        );


                    botones.forEach(
                        function (boton) {

                            boton.classList.remove(
                                "active"
                            );


                            const categoria =
                                normalizarTexto(
                                    boton.getAttribute(
                                        "data-category"
                                    )
                                );


                            if (
                                categoria ===
                                "all"
                            ) {

                                boton.classList.add(
                                    "active"
                                );

                            }

                        }
                    );

                }


                mostrarProductos();

            }
        );

    }


    /* =====================================================
       ABRIR CARRITO - HEADER
    ===================================================== */

    if (openCart) {

        openCart.addEventListener(
            "click",
            abrirCarrito
        );

    }


    /* =====================================================
       ABRIR CARRITO - TIENDA
    ===================================================== */

    if (openCartDesktop) {

        openCartDesktop.addEventListener(
            "click",
            abrirCarrito
        );

    }


    /* =====================================================
       CERRAR CARRITO
    ===================================================== */

    if (closeCart) {

        closeCart.addEventListener(
            "click",
            cerrarCarrito
        );

    }


    /* =====================================================
       OVERLAY
    ===================================================== */

    if (overlay) {

        overlay.addEventListener(
            "click",
            cerrarCarrito
        );

    }


    /* =====================================================
       CONTINUAR COMPRANDO
    ===================================================== */

    if (continueShopping) {

        continueShopping.addEventListener(
            "click",
            function () {

                cerrarCarrito();


                const tienda =
                    document.getElementById(
                        "tienda"
                    );


                if (tienda) {

                    tienda.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    /* =====================================================
       VACIAR CARRITO
    ===================================================== */

    if (clearCart) {

        clearCart.addEventListener(
            "click",
            function () {

                if (carrito.length === 0) {
                    return;
                }


                const confirmar =
                    confirm(
                        "¿Querés vaciar todo el carrito?"
                    );


                if (!confirmar) {
                    return;
                }


                carrito = [];


                guardarCarrito();

                actualizarCarrito();

            }
        );

    }


    /* =====================================================
       WHATSAPP PEDIDO
    ===================================================== */

    if (sendWhatsApp) {

        sendWhatsApp.addEventListener(
            "click",
            enviarPedidoWhatsApp
        );

    }


    /* =====================================================
       MENÚ MÓVIL
    ===================================================== */

    if (menuButton && nav) {

        menuButton.addEventListener(
            "click",
            function () {

                nav.classList.toggle(
                    "active"
                );

                menuButton.classList.toggle(
                    "active"
                );

            }
        );


        nav.addEventListener(
            "click",
            function (event) {

                if (
                    event.target.closest("a")
                ) {

                    nav.classList.remove(
                        "active"
                    );

                    menuButton.classList.remove(
                        "active"
                    );

                }

            }
        );

    }


    /* =====================================================
       WHATSAPP GENERAL
    ===================================================== */

    document
        .querySelectorAll("[data-whatsapp]")
        .forEach(function (boton) {

            boton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();


                    const mensajePersonalizado =
                        boton.getAttribute(
                            "data-whatsapp"
                        );


                    const mensaje =
                        mensajePersonalizado ||
                        "Hola, Clari Nails Shop. 👋 Quiero realizar una consulta.";


                    const url =
                        "https://wa.me/" +
                        CONFIG.whatsapp +
                        "?text=" +
                        encodeURIComponent(
                            mensaje
                        );


                    window.open(
                        url,
                        "_blank",
                        "noopener,noreferrer"
                    );

                }
            );

        });


    /* =====================================================
       INSTAGRAM
    ===================================================== */

    document
        .querySelectorAll("[data-instagram]")
        .forEach(function (boton) {

            boton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();


                    window.open(
                        CONFIG.instagram,
                        "_blank",
                        "noopener,noreferrer"
                    );

                }
            );

        });


    /* =====================================================
       AÑO
    ===================================================== */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       PRELOADER
    ===================================================== */

    window.addEventListener(
        "load",
        function () {

            if (preloader) {

                setTimeout(
                    function () {

                        preloader.classList.add(
                            "hidden"
                        );

                    },
                    300
                );

            }

        }
    );


    /* =====================================================
       CARRUSEL DE CURSOS
    ===================================================== */

    const coursesCarousel =
        document.getElementById(
            "coursesCarousel"
        );

    const coursesPrevBtn =
        document.getElementById(
            "coursesPrevBtn"
        );

    const coursesNextBtn =
        document.getElementById(
            "coursesNextBtn"
        );


    if (coursesCarousel) {

        let courseIndex = 0;
        let courseInterval = null;
        let coursePaused = false;


        function obtenerTarjetasCursos() {

            return coursesCarousel.querySelectorAll(
                ".course-card"
            );

        }


        function moverCarruselCursos(
            direccion
        ) {

            const tarjetas =
                obtenerTarjetasCursos();


            if (!tarjetas.length) {
                return;
            }


            const tarjeta =
                tarjetas[0];


            const ancho =
                tarjeta.offsetWidth;


            const estilo =
                window.getComputedStyle(
                    coursesCarousel
                );


            const gap =
                parseInt(
                    estilo.gap,
                    10
                ) || 24;


            const cantidad =
                tarjetas.length;


            courseIndex += direccion;


            if (
                courseIndex >=
                cantidad
            ) {

                courseIndex = 0;

            }


            if (
                courseIndex < 0
            ) {

                courseIndex =
                    cantidad - 1;

            }


            coursesCarousel.scrollTo({

                left:
                    courseIndex *
                    (ancho + gap),

                behavior:
                    "smooth"

            });

        }


        function iniciarAutoplayCursos() {

            if (courseInterval) {

                clearInterval(
                    courseInterval
                );

            }


            courseInterval =
                setInterval(
                    function () {

                        if (!coursePaused) {

                            moverCarruselCursos(
                                1
                            );

                        }

                    },
                    3000
                );

        }


        if (coursesNextBtn) {

            coursesNextBtn.addEventListener(
                "click",
                function () {

                    moverCarruselCursos(
                        1
                    );

                }
            );

        }


        if (coursesPrevBtn) {

            coursesPrevBtn.addEventListener(
                "click",
                function () {

                    moverCarruselCursos(
                        -1
                    );

                }
            );

        }


        coursesCarousel.addEventListener(
            "mouseenter",
            function () {

                coursePaused = true;

            }
        );


        coursesCarousel.addEventListener(
            "mouseleave",
            function () {

                coursePaused = false;

            }
        );


        coursesCarousel.addEventListener(
            "touchstart",
            function () {

                coursePaused = true;

            },
            {
                passive: true
            }
        );


        coursesCarousel.addEventListener(
            "touchend",
            function () {

                setTimeout(
                    function () {

                        coursePaused = false;

                    },
                    1500
                );

            },
            {
                passive: true
            }
        );


        iniciarAutoplayCursos();

    }


    /* =====================================================
       INICIALIZAR
    ===================================================== */

    mostrarProductos();

    actualizarCarrito();

});