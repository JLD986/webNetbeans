// Animación simple para el encabezado
const header = document.querySelector('h1');

header.addEventListener('mouseover', () => {
    header.style.transform = 'scale(1.1)';
    header.style.transition = 'transform 0.3s ease';
});

header.addEventListener('mouseout', () => {
    header.style.transform = 'scale(1)';
});
