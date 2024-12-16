document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const showLogin = document.getElementById("show-login");
    const showRegister = document.getElementById("show-register");
    const barraProgreso = document.getElementById("barraProgreso");
    const barra = document.getElementById("barra");
    const porcentaje = document.getElementById("porcentaje");

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyrHhYnyIA5Xh-hWmq0vPxLmCOM-YS4hF_ZG-PPviu02fQ6uNDqNit5EiHRNsaAESl5KQ/exec';

    // **Establecer estado inicial**
    if (loginForm && registerForm && showLogin && showRegister) {
        loginForm.classList.remove("hidden"); // Mostrar formulario de inicio
        registerForm.classList.add("hidden"); // Ocultar formulario de registro
        showLogin.classList.add("hidden"); // Ocultar botón de inicio
        showRegister.classList.remove("hidden"); // Mostrar botón de registro

        // Alternar formularios
        showLogin.addEventListener("click", () => {
            loginForm.classList.remove("hidden");
            registerForm.classList.add("hidden");
            showLogin.classList.add("hidden");
            showRegister.classList.remove("hidden");
        });

        showRegister.addEventListener("click", () => {
            registerForm.classList.remove("hidden");
            loginForm.classList.add("hidden");
            showRegister.classList.add("hidden");
            showLogin.classList.remove("hidden");
        });
    }

    // Mostrar barra de progreso
    function mostrarBarraProgreso() {
        barraProgreso?.classList.remove("hidden");
        barra.style.width = "0%";
        porcentaje.innerText = "0%";

        // Bloquear la interfaz
        document.body.classList.add('disabled');
    }

    function actualizarBarraProgreso(progreso) {
        barra.style.width = `${progreso}%`;
        porcentaje.innerText = `${progreso}%`;
    }

    // Simulación de progreso
    function simularProgreso(completadoCallback) {
        let progreso = 0;
        const interval = setInterval(() => {
            progreso += 5; // Incremento suave
            actualizarBarraProgreso(progreso);
            if (progreso >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    barraProgreso?.classList.add("hidden"); // Ocultar barra
                    document.body.classList.remove("disabled"); // Rehabilitar interacción
                    completadoCallback();
                }, 300); // Esperar 300ms después de completar la barra
            }
        }, 200); // Avanzar cada 200ms
    }

    // Enviar registro
    document.getElementById("registerForm")?.addEventListener("submit", (event) => {
        event.preventDefault();
        mostrarBarraProgreso();

        const formData = new FormData(event.target);
        const submitButton = event.target.querySelector("button[type='submit']");
        submitButton.disabled = true; // Deshabilitar botón

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                submitButton.disabled = false; // Habilitar botón nuevamente
                if (response.ok) {
                    simularProgreso(() => {
                        alert("Registro exitoso. Ahora puedes iniciar sesión.");
                        localStorage.setItem("usuario", formData.get("email"));
                        showLogin.click();
                    });
                } else {
                    throw new Error("Error al registrar.");
                }
            })
            .catch(error => {
                submitButton.disabled = false; // Habilitar en caso de error
                console.error("Error en el registro:", error);
                alert("Hubo un problema al procesar la solicitud. Intenta nuevamente más tarde.");
            });
    });

    // Enviar login
    document.getElementById("loginForm")?.addEventListener("submit", (event) => {
        event.preventDefault();
        mostrarBarraProgreso();

        const formData = new FormData(event.target);
        const submitButton = event.target.querySelector("button[type='submit']");
        submitButton.disabled = true; // Deshabilitar botón

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => response.json())
            .then(data => {
                submitButton.disabled = false; // Habilitar botón nuevamente
                if (data.success) {
                    simularProgreso(() => {
                        alert(`Bienvenido, ${data.nombre}`);
                        localStorage.setItem("usuario", data.nombre);
                        window.location.href = "inicio/index.html";
                    });
                } else {
                    throw new Error("Credenciales incorrectas.");
                }
            })
            .catch(error => {
                submitButton.disabled = false; // Habilitar en caso de error
                console.error("Error en el inicio de sesión:", error);
                alert("Hubo un problema al procesar la solicitud. Intenta nuevamente más tarde.");
            });
    });
});
