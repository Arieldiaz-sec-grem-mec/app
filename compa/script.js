const form = document.getElementById('companionForm');
const progressBar = document.getElementById('progress');
const SHEET_ID = '1EK4uXU9QbMQ40Uud5QBGKiVziG9TOqTFxZgcn86ifJE';
const SHEET_NAME = 'Compañeros';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  progressBar.style.width = '50%';
  progressBar.style.background = 'orange';

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
      progressBar.style.width = '100%';
      progressBar.style.background = 'green';
      alert('Datos enviados correctamente');
      form.reset();
    } else {
      throw new Error('Error al enviar los datos');
    }
  } catch (error) {
    progressBar.style.background = 'red';
    alert('Hubo un problema al enviar los datos');
  }
});
