const track = document.getElementById('carouselTrack');
const slides = Array.from(track.children);
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');

let currentSlide = 0;

nextButton.addEventListener('click', () => {
    slides[currentSlide].classList.remove('current-slide');
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add('current-slide');
});

prevButton.addEventListener('click', () => {
    slides[currentSlide].classList.remove('current-slide');
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add('current-slide');
});
