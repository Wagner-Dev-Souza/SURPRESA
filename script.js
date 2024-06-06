// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('meuVideo');
    const playButton = document.getElementById('playButton');

    video.addEventListener('play', () => {
        console.log('O vídeo está tocando');
    });

    video.addEventListener('pause', () => {
        console.log('O vídeo foi pausado');
    });

    video.addEventListener('ended', () => {
        console.log('O vídeo terminou');
    });

    // Tentar reproduzir o vídeo automaticamente
    video.play().catch(error => {
        console.error('Falha ao tentar reproduzir o vídeo automaticamente:', error);
        // Mostrar botão para iniciar o vídeo
        playButton.style.display = 'block';
    });

    // Reproduzir vídeo ao clicar no botão
    playButton.addEventListener('click', () => {
        video.play();
        playButton.style.display = 'none';
    });
});
