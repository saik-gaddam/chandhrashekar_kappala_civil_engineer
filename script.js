document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Handle Forms (Keep these if you have these forms on your page)
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your appointment request has been submitted.');
            this.reset();
        });
    }
});
