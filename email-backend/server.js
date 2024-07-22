const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify(function(error, success) {
  if (error) {
    console.error('SMTP Connection Error: ', error);
  } else {
    console.log('SMTP Server is ready to take messages');
  }
});

// Quote email
app.post('/send-email', (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Quote Request',
    text: `You have received a new quote request from: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Contact form email
app.post('/sendEmail', (req, res) => {
  const { name, company, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'New Client Contacting',
    text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send message', error: error.toString() });
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Message sent successfully' });
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
