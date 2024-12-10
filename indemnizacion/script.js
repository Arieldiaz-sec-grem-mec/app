document.getElementById('calcularBtn').addEventListener('click', function () {
    // Obtener valores
    const haberes = parseFloat(document.getElementById('haberes').value);
    const anios = parseInt(document.getElementById('anios').value);

    // Validación de datos
    if (isNaN(haberes) || isNaN(anios) || haberes <= 0 || anios <= 0) {
        alert('Por favor, ingresa valores válidos.');
        return;
    }

    // Cálculos
    const total = haberes * anios;
    const descuento = total * 0.215; // 21.5%
    const resultadoFinal = total - descuento;

    // Mostrar resultado
    const detalle = `
        Haberes: $${haberes.toLocaleString()}
        Años trabajados: ${anios}
        Total sin descuentos: $${total.toLocaleString()}
        Descuento (21.5%): $${descuento.toLocaleString()}
        Resultado final: $${resultadoFinal.toLocaleString()}
    `;

    document.getElementById('detalle').innerText = detalle;
    document.getElementById('resultado').style.display = 'block';
});