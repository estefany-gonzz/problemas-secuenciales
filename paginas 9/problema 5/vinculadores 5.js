document.addEventListener("DOMContentLoaded", function () {
    const calcularBtn = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");
    
    calcularBtn.addEventListener("click", function () {
        const metros = parseFloat(document.getElementById("metros").value);
        const costoPorMetro = parseFloat(document.getElementById("costo").value);
        
        if (isNaN(metros) || metros <= 0 || isNaN(costoPorMetro) || costoPorMetro <= 0) {
            resultadoDiv.textContent = "Por favor, ingresa valores válidos para los metros cuadrados y el costo.";
            return;
        }
        
        const presupuestoTotal = metros * costoPorMetro;
        
        // Mostrar el presupuesto
        resultadoDiv.textContent = `El presupuesto para pintar ${metros} m² es: $${presupuestoTotal.toFixed(2)} MXN.`;
    });
});
