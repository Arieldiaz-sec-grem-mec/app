// Obtener el nombre del usuario almacenado en localStorage
const nombreUsuario = localStorage.getItem("nombreUsuario");

// Mostrar el nombre del usuario en el contenedor correspondiente
const userDisplay = document.getElementById("user-name");
if (nombreUsuario) {
    userDisplay.textContent = `Bienvenido, ${nombreUsuario}`;
} else {
    userDisplay.textContent = "Usuario desconocido";
}

// Lista de URLs de las webs
const urls = [
 "/permisos/index.html",
 "/utiles/index.html",
 "/indemnizacion/index.html"
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
  // Redirigir a la página de inicio de sesión (cambiar la URL según corresponda)
  window.location.href = "../index.html";
};

// Asignar eventos a los botones
prevBtn.addEventListener("click", showPrevious);
nextBtn.addEventListener("click", showNext);
logoutBtn.addEventListener("click", logout);
