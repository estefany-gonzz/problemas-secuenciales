document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("edadForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const añoNacimiento = parseInt(document.getElementById("nacimiento").value);
        const añoActual = new Date().getFullYear();
        const resultado = document.getElementById("resultado");

        if (isNaN(añoNacimiento) || añoNacimiento > añoActual || añoNacimiento < 1900) {
            resultado.textContent = "Por favor ingresa un año válido.";
            return;
        }

        const edad = añoActual - añoNacimiento;

        resultado.textContent = `La persona tiene ${edad} años.`;
    });
});
