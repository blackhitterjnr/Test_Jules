import ScrollReveal from 'scrollreveal';

console.log("App loaded");

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Initialize ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        // viewFactor: 0.2, 
        // mobile: false, 
    });

    // Hero Section Animations
    sr.reveal('#hero h1', { delay: 300, origin: 'top' });
    sr.reveal('#hero .lead', { delay: 400, origin: 'left' });
    sr.reveal('#hero .btn', { delay: 500, origin: 'bottom' });

    // Section Titles (About, Projects, Contact)
    // This targets all h2 elements with class display-5 which are used as section titles
    sr.reveal('section h2.display-5', { interval: 200, origin: 'top' });

    // About Section Animations
    sr.reveal('#about img', { origin: 'left', delay: 300 });
    sr.reveal('#about .col-md-8 p', { origin: 'right', interval: 150, delay: 400 });
    sr.reveal('#about .btn', { origin: 'bottom', delay: 600 });

    // Projects Section Animations
    sr.reveal('#projects .card', { interval: 200, origin: 'bottom', distance: '80px' });

    // Contact Section Animations
    sr.reveal('#contact .lead', { delay: 300, origin: 'top' });
    sr.reveal('#contact .btn', { delay: 400, origin: 'bottom' });
});
