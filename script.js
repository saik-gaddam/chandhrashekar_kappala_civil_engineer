/**
 * Standardized Website Interaction Script
 * Works across index.html, about.html, projects.html, contact.html, and booking.html
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Unified Mobile Menu Handler
    const mobileMenu = document.getElementById('mobile-menu');
    
    // This looks for the menu using the ID OR the common classes you've used
    const navList = document.getElementById('nav-list') || 
                    document.querySelector('.nav-links') || 
                    document.querySelector('.nav-menu');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            const isOpen = navList.classList.toggle('active');
            mobileMenu.classList.toggle('is-open');
            
            // Animate hamburger spans if they exist (works for both <span> and .bar)
            const spans = mobileMenu.querySelectorAll('span, .bar');
            if (spans.length >= 3) {
                if (isOpen) {
                    spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
                } else {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            }
        });

        // Auto-close menu when a link is clicked (Mobile UX improvement)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                mobileMenu.classList.remove('is-open');
                const spans = mobileMenu.querySelectorAll('span, .bar');
                spans.forEach(s => {
                    s.style.transform = 'none';
                    s.style.opacity = '1';
                });
            });
        });
    }

    // 2. Dynamic Navbar Background on Scroll
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(0, 0, 0, 0.9)';
                nav.style.padding = '10px 5%';
            } else {
                // If you add class="light-page" to <body> on about/contact, 
                // this ensures the nav is visible.
                const isLightPage = document.body.classList.contains('light-page');
                nav.style.background = isLightPage ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.1)';
                nav.style.padding = '15px 5%';
            }
        });
    }

    // 3. Smooth Scroll for Anchor Links (e.g., href="#contact")
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
