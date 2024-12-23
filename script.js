// Initialize EmailJS
emailjs.init('GW-S2k9_rQ204PIQQ');

function sendMail() {
  // Collect form data
  const parms = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  // Send email using EmailJS
  emailjs
    .send('service_wmq53xg', 'template_djoeh0t', parms)
    .then(() => {
      alert('Email Sent Successfully');
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Please try again.');
    });
}
