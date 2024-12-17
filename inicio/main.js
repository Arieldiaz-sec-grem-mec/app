// Obtener el nombre del usuario desde localStorage
const nombreUsuario = localStorage.getItem("usuario");
const userDisplay = document.getElementById("user-name");

// Mostrar el nombre del usuario
if (userDisplay) {
  userDisplay.textContent = nombreUsuario ? `Bienvenido, ${nombreUsuario}` : "Usuario desconocido";
}

// URLs de las páginas a navegar
const urls = [
  
  "../indemnizacion/index.html",
  "../compa/index.html",
  "../compa/lista.html",
  "../gestiones/index.html
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
  currentIndex = (currentIndex - 1 + urls.length) % urls.length;
  iframe.src = urls[currentIndex];
};

const showNext = () => {
  currentIndex = (currentIndex + 1) % urls.length;
  iframe.src = urls[currentIndex];
};

// Función para cerrar sesión
const logout = () => {
  alert("Cerrando sesión...");
  localStorage.removeItem("usuario");
  window.location.href = "../index.html";
};

// Asignar eventos a botones
prevBtn.addEventListener("click", showPrevious);
nextBtn.addEventListener("click", showNext);
logoutBtn.addEventListener("click", logout);
