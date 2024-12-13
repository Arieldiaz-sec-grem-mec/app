// Obtener el nombre del usuario almacenado en localStorage
const nombreUsuario = localStorage.getItem("usuario");

// Mostrar el nombre del usuario en el contenedor correspondiente
const userDisplay = document.getElementById("user-name");
if (userDisplay) {
    if (nombreUsuario) {
        userDisplay.textContent = `Bienvenido, ${nombreUsuario}`;
    } else {
        userDisplay.textContent = "Usuario desconocido";
    }
} else {
    console.warn("No se encontró el elemento 'user-name'.");
}

// Lista de URLs de las webs
const urls = [
    "../permisos/index.html",
    "../utiles/index.html",
    "../indemnizacion/index.html",
    "../compa/index.html",
    "../compa/lista.html"
];

// Índice actual
let currentIndex = 0;

// Referencias a elementos
const iframe = document.getElementById("web-viewer");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const logoutBtn = document.getElementById("logout-btn");

// Mostrar la primera URL
iframe.src = urls[currentIndex];

// Funciones de navegación
const showPrevious = () => {
    currentIndex = (currentIndex - 1 + urls.length) % urls.length; // Retrocede y vuelve al final si llega al principio
    iframe.src = urls[currentIndex];
};

const showNext = () => {
    currentIndex = (currentIndex + 1) % urls.length; // Avanza y vuelve al principio si llega al final
    iframe.src = urls[currentIndex];
};

// Manejar el cierre de sesión
const logout = () => {
    alert("Cerrando sesión...");
    localStorage.removeItem("usuario"); // Elimina la información del usuario
    window.location.href = "../index.html";
};

// Asignar eventos a los botones
if (prevBtn) prevBtn.addEventListener("click", showPrevious);
if (nextBtn) nextBtn.addEventListener("click", showNext);
if (logoutBtn) logoutBtn.addEventListener("click", logout);


  