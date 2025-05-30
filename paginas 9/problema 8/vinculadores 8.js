document.addEventListener("DOMContentLoaded", function () {
    const calcularBtn = document.getElementById("calcular");
    const resultadoDiv = document.getElementById("resultado");

    calcularBtn.addEventListener("click", function () {
        const distancia = parseFloat(document.getElementById("distancia").value);
        const velocidad = parseFloat(document.getElementById("velocidad").value);

        if (isNaN(distancia) || distancia <= 0 || isNaN(velocidad) || velocidad <= 0) {
            resultadoDiv.textContent = "Por favor, ingresa valores válidos.";
            return;
        }

        const tiempo = distancia / velocidad;
        const horas = Math.floor(tiempo);
        const minutos = Math.round((tiempo - horas) * 60);

        resultadoDiv.textContent = `El tiempo estimado de viaje es: ${horas} horas y ${minutos} minutos.`;
    });
});
