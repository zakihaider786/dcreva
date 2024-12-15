document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const emailInput = document.getElementById('email-input');
    const responseMessage = document.getElementById('response-message');
    const email = emailInput.value.trim();

    // Clear any previous message
    responseMessage.textContent = '';

    // Validate email input
    if (!validateEmail(email)) {
        responseMessage.textContent = 'Please enter a valid email address.';
        responseMessage.style.color = 'red';
        return;
    }

    // Show a loading message
    responseMessage.textContent = 'Sending...';
    responseMessage.style.color = 'blue';

    // Send email using EmailJS
    emailjs.send('service_pnw73gb', 'template_kd8tm8m', { email: email })
        .then(function () {
            responseMessage.textContent = 'Subscription email sent successfully!';
            responseMessage.style.color = 'lightgreen';
            emailInput.value = ''; // Clear the input field
        })
        .catch(function (error) {
            console.error('EmailJS error:', error);
            responseMessage.textContent = 'Failed to send email. Please try again later.';
            responseMessage.style.color = 'red';
        });
});

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
