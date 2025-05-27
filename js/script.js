document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');

            // Check if the link is an internal anchor
            if (href && href.startsWith('#')) {
                event.preventDefault(); // Prevent default anchor behavior

                const targetId = href.substring(1); // Remove '#'
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
