document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("calcular");
    const resultado = document.getElementById("resultado");

    boton.addEventListener("click", function () {
        const a = parseFloat(document.getElementById("catetoA").value);
        const b = parseFloat(document.getElementById("catetoB").value);

        if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
            resultado.textContent = "Por favor, ingresa valores válidos para ambos catetos.";
            return;
        }

        const hipotenusa = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        resultado.textContent = `La hipotenusa del triángulo es: ${hipotenusa.toFixed(2)} unidades.`;
    });
});
