document.addEventListener("DOMContentLoaded", function() {
    const elemento = document.getElementById("profissao");
    const texto = elemento.textContent.trim();
    elemento.textContent = "";  // Limpa o texto antes de começar a digitar

    function typeWriter() {
        let index = 0;
        function escrever() {
            if (index < texto.length) {
                elemento.textContent += texto.charAt(index);
                index++;
                setTimeout(escrever, 150);
            }
        }
        escrever();
    }

    // Espera o tempo da animação do card antes de começar a digitar
    setTimeout(typeWriter, 1500);  // 1.2 segundos de delay
});
