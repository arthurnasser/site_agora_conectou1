document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const nextButton = document.getElementById('nextBtn');
    const prevButton = document.getElementById('prevBtn');
    const servicoWidth = document.querySelector('.servico').offsetWidth;
    let position = 0;

    nextButton.addEventListener('click', () => {
        position -= servicoWidth;
        position = Math.max(position, -carousel.offsetWidth + servicoWidth * 3);
        carousel.style.transform = `translateX(${position}px)`;
    });

    prevButton.addEventListener('click', () => {
        position += servicoWidth;
        position = Math.min(0, position);
        carousel.style.transform = `translateX(${position}px)`;
    });
});
