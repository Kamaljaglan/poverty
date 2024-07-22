document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 0; // Adjust this value if you have a fixed header

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');
    
    if (name === '' || email === '' || message === '') {
        feedback.textContent = 'Please fill out all fields.';
        feedback.style.color = 'red';
        return;
    }
    
    // Simulate form submission
    setTimeout(() => {
        feedback.textContent = 'Thank you for your message! We will get back to you soon.';
        feedback.style.color = '#4CAF50';
        document.getElementById('contactForm').reset();
    }, 1000);
});