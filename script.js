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

    // Scroll to the next section after 5 minutes (300,000 ms)
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % sections.length;
        scrollToSection(currentIndex);

        // Continue auto-scrolling every 5 minutes for subsequent sections
        setInterval(() => {
            currentIndex = (currentIndex + 1) % sections.length;
            scrollToSection(currentIndex);
        }, 300000); // 5 minutes
    }, 300000); // Initial interval is 5 minutes
});
