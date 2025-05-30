document.addEventListener("DOMContentLoaded", function () {
    const calcularBtn = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");

    calcularBtn.addEventListener("click", function () {
        const kms = parseFloat(document.getElementById("kms").value);
        const costoKm = parseFloat(document.getElementById("costoKm").value);

        if (isNaN(kms) || kms <= 0 || isNaN(costoKm) || costoKm <= 0) {
            resultadoDiv.textContent = "Por favor, ingresa valores válidos.";
            return;
        }

        const costoTotal = kms * costoKm;

        resultadoDiv.textContent = `El costo del boleto para ${kms} km es: $${costoTotal.toFixed(2)} MXN.`;
    });
});
