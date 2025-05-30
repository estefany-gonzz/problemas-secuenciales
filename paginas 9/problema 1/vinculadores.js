// Esperamos a que el contenido del DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("triangleForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        const base = parseFloat(document.getElementById("base").value);
        const altura = parseFloat(document.getElementById("altura").value);
        const resultado = document.getElementById("resultado");

        // Validar los valores
        if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
            resultado.textContent = "Por favor ingrese valores válidos.";
            return;
        }

        // Calcular área
        const area = (base * altura) / 2;

        // Mostrar resultado
        resultado.textContent = `El área del triángulo es: ${area.toFixed(2)} cm²`;
    });
});
