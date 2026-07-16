/**
 * Standardized Website Interaction Script
 * Works across index.html, about.html, projects.html, contact.html, and booking.html
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Unified Mobile Menu Handler
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Looks for the menu using ID or common classes (Works for all your pages)
    const navList = document.getElementById('nav-list') || 
                    document.querySelector('.nav-links') || 
                    document.querySelector('.nav-menu');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            // Toggle classes
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('is-open');
            mobileMenu.classList.toggle('is-active'); // Added to match common CSS naming
        });

        // Auto-close menu when a link is clicked
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                mobileMenu.classList.remove('is-open');
                mobileMenu.classList.remove('is-active');
            });
        });
    }

    // 2. Dynamic Navbar Background on Scroll
    const nav = document.querySelector('nav') || document.querySelector('.navbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(0, 0, 0, 0.9)';
                nav.style.padding = '10px 5%';
            } else {
                const isLightPage = document.body.classList.contains('light-page');
                // Standard background for Booking Page/Projects
                nav.style.background = isLightPage ? 'rgba(255, 255, 255, 0.9)' : 'transparent';
                nav.style.padding = '15px 5%';
            }
        });
    }

    // 3. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('is-active');
    });
}
