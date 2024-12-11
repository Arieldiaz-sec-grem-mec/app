// Referencias a los elementos principales
const btnRegistro = document.getElementById('btnRegistro');
const btnLogin = document.getElementById('btnLogin');
const formulario = document.getElementById('formulario');

// Referencias a la barra de progreso
const barraProgreso = document.getElementById('barraProgreso');
const barra = document.getElementById('barra');
const porcentaje = document.getElementById('porcentaje');

// URL del Web App de Google Apps Script
const scriptURL = 'https://script.google.com/macros/s/AKfycbyrHhYnyIA5Xh-hWmq0vPxLmCOM-YS4hF_ZG-PPviu02fQ6uNDqNit5EiHRNsaAESl5KQ/exec';

function mostrarBarraProgreso() {
    barraProgreso.classList.remove('hidden');
    barra.style.width = '0%';
    barra.style.backgroundColor = 'rgb(255, 0, 0)';
    porcentaje.innerText = '0%';
}

function calcularColorProgreso(porcentajeProgreso) {
    const inicioColor = [255, 0, 0]; // Rojo
    const finColor = [0, 255, 0];   // Verde

    const r = inicioColor[0] + ((finColor[0] - inicioColor[0]) * (porcentajeProgreso / 100));
    const g = inicioColor[1] + ((finColor[1] - inicioColor[1]) * (porcentajeProgreso / 100));
    const b = inicioColor[2] + ((finColor[2] - inicioColor[2]) * (porcentajeProgreso / 100));

    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

function actualizarBarraProgreso(porcentajeProgreso) {
    barra.style.width = `${porcentajeProgreso}%`;
    barra.style.backgroundColor = calcularColorProgreso(porcentajeProgreso);
    porcentaje.innerText = `${porcentajeProgreso}%`;
}

function simularProgreso(completadoCallback) {
    let progreso = 0;
    const interval = setInterval(() => {
        progreso += 10;
        actualizarBarraProgreso(progreso);
        if (progreso >= 100) {
            clearInterval(interval);
            completadoCallback();
        }
    }, 500);
}

// Función para mostrar el formulario de registro
function mostrarFormularioRegistro() {
    formulario.innerHTML = `
        <h2>Registro</h2>
        <form id="registroForm">
            <label for="nombre">Nombre Completo:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre completo" required>

            <label for="email">Correo Electronico:</label>
            <input type="email" id="Correo electronico" name="email" placeholder="Ingrese su correo electrónico" required>

            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required>

            <label for="passwordConfirm">Confirmar Contraseña:</label>
            <input type="password" id="passwordConfirm" name="passwordConfirm" placeholder="Confirme su contraseña" required>

            <button type="submit">Registrar</button>
        </form>
    `;
    formulario.classList.remove('hidden');
}

// Función para mostrar el formulario de login
function mostrarFormularioLogin() {
    formulario.innerHTML = `
        <h2>Login</h2>
        <form id="loginForm">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" placeholder="Ingrese su correo electrónico" required>

            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required>

            <button type="submit">Iniciar Sesión</button>
        </form>
    `;
    formulario.classList.remove('hidden');
}

// Función para enviar los datos de registro
function enviarRegistro(event) {
    event.preventDefault();
    mostrarBarraProgreso();

    const formData = new FormData(event.target);

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            if (response.ok) {
                simularProgreso(() => {
                    alert('Registro enviado exitosamente.');
                    event.target.reset();
                    barraProgreso.classList.add('hidden');
                });
            } else {
                throw new Error('Error al enviar el registro.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al conectar con el servidor.');
            barraProgreso.classList.add('hidden');
        });
}

// Función para enviar los datos de login
function enviarLogin(event) {
    event.preventDefault();
    mostrarBarraProgreso();

    const formData = new FormData(event.target);

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                simularProgreso(() => {
                    alert(`Inicio de sesión exitoso. Bienvenido, ${data.nombre}!`);
                    localStorage.setItem('nombreUsuario', data.nombre);
                    window.location.href = "inicio/index.html";
                });
            } else {
                throw new Error(data.message || 'Error en el inicio de sesión.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al conectar con el servidor.');
            barraProgreso.classList.add('hidden');
        });
}

// Inicializar eventos y formularios
btnRegistro.addEventListener('click', mostrarFormularioRegistro);
btnLogin.addEventListener('click', mostrarFormularioLogin);

document.addEventListener('submit', event => {
    if (event.target.id === 'registroForm') enviarRegistro(event);
    if (event.target.id === 'loginForm') enviarLogin(event);
});
