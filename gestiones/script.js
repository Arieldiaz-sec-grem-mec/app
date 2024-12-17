document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío tradicional del formulario

    // Obtener los datos del formulario
    const formData = {
        name: document.getElementById('name').value,
        date: document.getElementById('date').value,
        report: document.getElementById('report').value
    };

    // Desactivar el botón para evitar múltiples envíos
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;

    // Enviar los datos al script de Google Apps (Google Sheets)
    fetch('https://script.google.com/macros/s/AKfycbxRn2wKT_1qkmlXNSj3G-NkZ0K2l2Sb7VrMtN4C3YK9lIc_uPUK4lV3QqIc0c-alqws/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        mode: 'no-cors' // Usamos no-cors para evitar bloqueos de CORS
    })
    .then(response => {
        // Aunque no podemos acceder al cuerpo de la respuesta con no-cors, tratamos de manejar el éxito
        alert('Datos enviados con éxito.');
        // Resetear el formulario
        document.getElementById('dataForm').reset();
    })
    .catch(error => {
        alert('Error al enviar los datos: ' + error.message);
    })
    .finally(() => {
        // Restaurar el estado del botón
        submitButton.disabled = false;
    });
});
