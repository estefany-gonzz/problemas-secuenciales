document.addEventListener("DOMContentLoaded", function () {
    const calcularBtn = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");

    calcularBtn.addEventListener("click", function () {
        const minutos = parseFloat(document.getElementById("minutos").value);
        const costoMinuto = parseFloat(document.getElementById("costoMin").value);

        if (isNaN(minutos) || minutos <= 0 || isNaN(costoMinuto) || costoMinuto <= 0) {
            resultadoDiv.textContent = "Por favor, ingresa valores válidos.";
            return;
        }

        const costoTotal = minutos * costoMinuto;

        resultadoDiv.textContent = `El costo total de la llamada es: $${costoTotal.toFixed(2)} MXN.`;
    });
});
