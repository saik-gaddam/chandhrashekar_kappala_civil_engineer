document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            // Accessibility: Update ARIA state
            mobileMenu.setAttribute('aria-expanded', isActive);
        });
    }

    // Booking Form Logic
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic Validation Check
            if (!this.checkValidity()) {
                alert('Please fill out all required fields.');
                return;
            }

            // Implementation of a cleaner feedback mechanism
            console.log('Form submitted successfully');
            alert('Thank you! Your appointment request has been submitted.');
            
            this.reset();
        });
    }
});
