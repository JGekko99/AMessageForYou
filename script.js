// script.js

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    let currentIndex = 0;

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
        }
    }

    function handleScroll(e) {
        if (e.deltaY > 0) {
            currentIndex = Math.min(sections.length - 1, currentIndex + 1);
        } else {
            currentIndex = Math.max(0, currentIndex - 1);
        }
        scrollToSection(currentIndex);
    }

    window.addEventListener('wheel', handleScroll, { passive: true });

    // First scroll interval set to 1 minute (60000 ms)
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % sections.length;
        scrollToSection(currentIndex);

        // Subsequent scrolls every 8 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % sections.length;
            scrollToSection(currentIndex);
        }, 8000);

    }, 60000);  // First interval is 60 seconds
});
