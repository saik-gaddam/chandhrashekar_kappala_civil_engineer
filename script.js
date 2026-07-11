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

<script>
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from reloading
    
    // Logic to save the booking (e.g., sending to a server/database) goes here
    
    // Show the confirmation notification
    const message = document.getElementById('confirmation-message');
    message.style.display = 'block';
    
    // Optional: Hide form fields after submission
    document.getElementById('bookingForm').style.display = 'none';
});
</script>

emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    user_name: document.getElementById('name').value,
    user_email: document.getElementById('email').value,
    booking_date: document.getElementById('date').value
});
