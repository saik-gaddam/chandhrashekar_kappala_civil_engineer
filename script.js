document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your appointment request has been submitted.');
    this.reset();
});
