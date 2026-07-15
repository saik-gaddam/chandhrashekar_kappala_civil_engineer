// Request browser permission for push notifications as soon as the app opens
document.addEventListener('DOMContentLoaded', () => {
    if ('Notification' in window) {
        if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
            Notification.requestPermission();
        }
    }
});

// Intercept form submission
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents default web page refresh

    const appointmentData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value
    };

    // 1. Send the data to your Node.js backend
    fetch('http://localhost:3000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData)
    })
    .then(response => response.json())
    .then(data => {
        // 2. Trigger the local browser notification once the server confirms receipt
        triggerLocalNotification(appointmentData.name, appointmentData.date);
        this.reset(); // Clear form
    })
    .catch(error => console.error('Error sending data to server:', error));
});

// Function to handle browser-level notifications
function triggerLocalNotification(name, date) {
    if (!('Notification' in window)) return;

    const title = "Appointment Submitted! 📅";
    const options = {
        body: `Consultation confirmed for ${name} on ${date}.`,
        vibrate: [200, 100, 200]
    };

    if (Notification.permission === 'granted') {
        new Notification(title, options);
    }
}

// Mobile Menu Toggle Logic
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });
}
