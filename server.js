const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors()); // Allows your frontend website to securely communicate with this backend
app.use(express.json()); // Allows Node.js to read the JSON data sent from fetch()

// POST Endpoint to receive appointment data
app.post('/api/appointments', (req, res) => {
    const { name, email, date } = req.body;

    // Server-side action: Log the notification directly to your terminal terminal
    console.log(`\n🔔 NEW APPOINTMENT RECEIVED on Server!`);
    console.log(`👤 Client Name: ${name}`);
    console.log(`✉️ Email: ${email}`);
    console.log(`📅 Date Booked: ${date}\n`);

    // TODO: Add database logic (e.g., MongoDB/MySQL) or third-party email notification logic here

    // Send success response back to script.js
    res.status(200).json({ success: true, message: 'Appointment securely logged on the server.' });
});

// Set the server port
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Back-end server is running actively on http://localhost:${PORT}`);
});
