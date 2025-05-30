document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("parkingForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const horas = parseFloat(document.getElementById("horas").value);
        const costoPorHora = 50;  // Costo por cada hora de estacionamiento
        const resultado = document.getElementById("resultado");

        if (isNaN(horas) || horas <= 0) {
            resultado.textContent = "Por favor, ingresa un número válido de horas.";
            return;
        }

        // Redondear hacia arriba para tomar fracciones como completas
        const horasTotales = Math.ceil(horas);

        // Calcular el cobro total
        const cobroTotal = horasTotales * costoPorHora;

        resultado.textContent = `El cobro por ${horasTotales} hora(s) es: $${cobroTotal} MXN.`;
    });
});
