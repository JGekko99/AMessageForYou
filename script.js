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
            currentIndex = (currentIndex + 1) % sections.length;
        } else {
            currentIndex = (currentIndex - 1 + sections.length) % sections.length;
        }
        scrollToSection(currentIndex);
    }

    window.addEventListener('wheel', handleScroll, { passive: true });

    // Optional: Auto-scroll to the next section every 5 seconds for a continuous experience
    setInterval(() => {
        currentIndex = (currentIndex + 1) % sections.length;
        scrollToSection(currentIndex);
    }, 5000);
});
