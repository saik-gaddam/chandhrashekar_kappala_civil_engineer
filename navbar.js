// navbar.js
document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
        <nav class="navbar">
            <a href="index.html" class="logo">KCS</a>
            <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul class="nav-menu" id="nav-menu">
                <li><a href="index.html" id="nav-home">Home</a></li>
                <li><a href="projects.html" id="nav-projects">Projects</a></li>
                <li><a href="booking.html" id="nav-booking">Book Appointment</a></li>
            </ul>
        </nav>
    `;

    // 1. Insert the navbar at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // 2. Logic to set the 'active' class automatically
    const currentPath = window.location.pathname.split("/").pop();
    const links = {
        'index.html': 'nav-home',
        'projects.html': 'nav-projects',
        'booking.html': 'nav-booking',
        '': 'nav-home' // Default for root folder
    };

    const activeId = links[currentPath];
    if (activeId) {
        document.getElementById(activeId).classList.add('active');
    }

    // 3. Mobile Menu Toggle Logic
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
        });
    }
});
