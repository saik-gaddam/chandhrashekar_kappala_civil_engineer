document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your appointment request has been submitted.');
    this.reset();
});

document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Use Formspree to send the email (replace YOUR_ID with your Formspree endpoint)
  const formData = new FormData(this);
  fetch("https://formspree.io/f/YOUR_ID", {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      alert("Appointment booked successfully!");
    } else {
      alert("Error booking appointment.");
    }
  });
});
