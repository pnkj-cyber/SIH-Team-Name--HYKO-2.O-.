
// Login form logic
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      // Example: send to backend (replace URL with your backend endpoint)
      fetch('https://your-backend-url/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      .then(res => res.ok ? alert('Login successful!') : alert('Login failed.'))
      .catch(() => alert('Login failed.'));
    });
  }
});

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-info', async (req, res) => {
  const { name, email, state, district, village } = req.body;

  // Configure your Gmail SMTP
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yourgmail@gmail.com',         // <-- your Gmail address
      pass: 'your-app-password'            // <-- your Gmail App Password
    }
  });

  let mailOptions = {
    from: 'yourgmail@gmail.com',
    to: 'yourgmail@gmail.com',             // <-- where to receive the form info
    subject: 'New Pollution Dashboard Submission',
    text: `Name: ${name}\nEmail: ${email}\nState: ${state}\nDistrict: ${district}\nVillage: ${village}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));

document.getElementById('infoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const captcha = document.getElementById('captchaCheck').checked;
  if (!captcha) {
    alert('Please verify you are not a robot.');
    return;
  }

  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    state: document.getElementById('state').value,
    district: document.getElementById('district').value,
    village: document.getElementById('village').value
  };

  fetch('http://localhost:3000/send-info', { // Use your deployed backend URL if not local
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.ok ? alert('Submitted successfully!') : alert('Submission failed.'))
  .catch(() => alert('Submission failed.'));
});

// script.js
 document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            console.log('User:', username, 'Pass:', password);
            alert('Login attempt for: ' + username);
            // यहाँ तुम AJAX कॉल या बैकएंड वेरिफिकेशन जोड़ सकते हो
        });
// Handle "More Details" button click
document.addEventListener("DOMContentLoaded", () => {
  const moreDetailsBtn = document.querySelector(".hero .btn-success");
  moreDetailsBtn.addEventListener("click", () => {
    alert("More details about the pollution dashboard...");
  });
});
     if (moreDetailsBtn) {
       moreDetailsBtn.addEventListener("click", () => {
         alert("More details about the pollution dashboard...");
       });
     }
     // Handle "Submit Quote Request" button click
     const submitQuoteBtn = document.querySelector(".hero .btn-primary");
     if (submitQuoteBtn) {
       submitQuoteBtn.addEventListener("click", () => {
         alert("Quote request submitted.");
       });
     }
     // Handle "Submit Quote Request"
     const quoteBtn = document.querySelector(".welcome .btn-dark");
     if (quoteBtn) {
           quoteBtn.addEventListener("click", (e) => {
               e.preventDefault();
               alert("Quote request submitted.");
           });
     }
     // Animate feature boxes when hovered (extra JS)
     const features = document.querySelectorAll(".feature-box");
     features.forEach((box) => {
           box.addEventListener("mouseenter", () => {
               box.style.transform = "scale(1.05)";
               box.style.transition = "0.3s";
           });
           box.addEventListener("mouseleave", () => {
               box.style.transform = "scale(1)";
           });