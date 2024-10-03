// Función para manejar el cambio de secciones (Mundo Moderno y Mundo Antiguo)
function showSection(sectionId) {
    const sections = document.querySelectorAll('.carousel-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Función para manejar el movimiento del carrusel
let slideIndex = 0;

function moveSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.getElementsByTagName('img');
    const totalSlides = slides.length;

    slideIndex += direction;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    const slideWidth = slides[0].clientWidth + 10; // Ancho de la imagen + margen
    carousel.style.transform = 'translateX(${-slideIndex * slideWidth}px)';
}
