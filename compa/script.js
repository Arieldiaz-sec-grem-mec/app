const form = document.getElementById('companionForm');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Desactivar botón y aplicar animación
  submitButton.disabled = true;
  submitButton.classList.add('loading-animation');

  const formData = {
    id: crypto.randomUUID(),
    name: document.getElementById('name').value,
    affiliateNumber: document.getElementById('affiliateNumber').value,
    document: document.getElementById('document').value,
    category: document.getElementById('category').value,
    task: document.getElementById('task').value,
    admissionDate: document.getElementById('admissionDate').value,
    delegate: localStorage.getItem('usuario') || 'Desconocido',
  };

  try {
    const response = await fetch(
      `https://script.google.com/macros/s/AKfycbzJzQgHk5DIhIqWKEjR431DUAiuIjA7iz3ng4i4KVEZ88eZ2ZoY_wQSAqktpoRC_ryCVQ/exec`,
      {
        method: 'POST',
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (result.success) {
      alert('Datos enviados correctamente');
      form.reset();
    } else {
      throw new Error('Error al enviar los datos');
    }
  } catch (error) {
    alert('Hubo un problema al enviar los datos');
  } finally {
    // Restaurar botón después de la animación
    setTimeout(() => {
      submitButton.disabled = false;
      submitButton.classList.remove('loading-animation');
    }, 2000);
  }
});
