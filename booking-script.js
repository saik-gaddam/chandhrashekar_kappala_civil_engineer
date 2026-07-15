// Initialize AOS Animations
AOS.init();

// Initialize EmailJS (Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS key)
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

const btn = document.querySelector('.submit-btn');
const formStatus = document.getElementById('form-status');

document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    btn.innerText = 'Sending...';
    btn.disabled = true;

    // These IDs come from your EmailJS Dashboard
    const serviceID = 'default_service';
    const templateID = 'YOUR_TEMPLATE_ID';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.innerText = 'Appointment Confirmed!';
            formStatus.innerHTML = '<span class="text-success">Success! Notification sent to the Engineer.</span>';
            this.reset();
        }, (err) => {
            btn.disabled = false;
            btn.innerText = 'Confirm Appointment';
            formStatus.innerHTML = '<span class="text-danger">Failed to send. Please try again.</span>';
            console.error(JSON.stringify(err));
        });
});
