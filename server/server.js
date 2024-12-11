const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Transporter for sending email using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tdd2632@rit.edu', // Your email
    pass: 'Lordthe41@@@',  // Your email password (or use OAuth2 for security)
  },
});

// Email sending route
app.post('/send-email', (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-private-email@example.com',
    subject: 'New Purchase Request',
    text: `A new user has clicked on the Buy Now button and entered the email: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
