// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', () => {
    const btnInterativo = document.getElementById('btn-interativo');
    const infoExtra = document.getElementById('info-extra');

    if (btnInterativo && infoExtra) {
        // Evento interativo para o botão da galeria
        btnInterativo.addEventListener('click', () => {
            if (infoExtra.classList.contains('hidden')) {
                infoExtra.classList.remove('hidden');
                btnInterativo.textContent = 'Ocultar Detalhes';
                btnInterativo.style.backgroundColor = '#d32f2f'; // Altera cor para indicar fechamento
            } else {
                infoExtra.classList.add('hidden');
                btnInterativo.textContent = 'Ver Detalhes do Peso';
                btnInterativo.style.backgroundColor = '#266b9e'; // Retorna à cor original
            }
        });
    }
    
    // Animação suave ao clicar nos links do menu
    const links = document.querySelectorAll('nav a');
    for (const link of links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});