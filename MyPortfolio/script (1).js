document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Add 'scrolled' class to header for subtle styling change
    const header = document.querySelector('header');
    const scrollHandler = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', scrollHandler);

    // Optional: Simple scroll animation for sections (requires Intersection Observer API for best results)
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // optional: remove 'visible' class if you want the animation to repeat on scroll up/down
                // entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the section is visible
    });

    sections.forEach(section => {
        section.classList.add('fade-in-section'); // Add initial class for styling
        observer.observe(section);
    });
});