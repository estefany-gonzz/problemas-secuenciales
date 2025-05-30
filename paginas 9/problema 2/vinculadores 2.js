document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("currencyForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const pesos = parseFloat(document.getElementById("pesos").value);
        const tipoCambio = parseFloat(document.getElementById("tipoCambio").value);
        const resultado = document.getElementById("resultado");

        if (isNaN(pesos) || isNaN(tipoCambio) || pesos <= 0 || tipoCambio <= 0) {
            resultado.textContent = "Por favor ingresa valores válidos.";
            return;
        }

        
        const dolares = pesos / tipoCambio;

        resultado.textContent = `Con ${pesos.toFixed(2)} MXN puedes comprar ${dolares.toFixed(2)} USD al tipo de cambio de ${tipoCambio.toFixed(2)}.`;
    });
});
