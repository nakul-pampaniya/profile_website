document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent real form submission
  
  // Simple alert (later we can connect real backend or email service)
  alert('Thank you for your message, ' + document.getElementById('name').value + '!!');
  
  // Clear form
  document.getElementById('contact-form').reset();
});
