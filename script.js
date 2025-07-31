document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    // Function to handle the active state
    function setActiveSection(targetId) {
        // Remove 'active' class from all links and sections
        navLinks.forEach(nav => {
            nav.classList.remove('active');
            const span = nav.querySelector('span');
            if (span) {
                span.style.transform = 'scaleX(0)';
            }
        });
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Add 'active' class to the corresponding link and section
        const activeLink = document.querySelector(`.nav-link[href="#${targetId}"]`);
        const activeSection = document.getElementById(`${targetId}-content`);

        if (activeLink) {
            activeLink.classList.add('active');
            const span = activeLink.querySelector('span');
            if (span) {
                span.style.transform = 'scaleX(1)';
            }
        }
        if (activeSection) {
            activeSection.classList.add('active');
        }
    }

    // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            setActiveSection(targetId);
        });
    });

    // Set initial active section on page load
    const initialHash = window.location.hash.substring(1) || 'about';
    setActiveSection(initialHash);
});
