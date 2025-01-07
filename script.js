// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Here you would typically send this data to a server
    const formMessage = `Thank you for reaching out, ${name}!\n\nWe've received your message and will get back to you at ${email} soon.`;
    alert(formMessage);
    this.reset();
});

// Check for thank you parameter
if (window.location.search.includes('thankyou=true')) {
    const thankYouMessage = document.createElement('div');
    thankYouMessage.className = 'thank-you-message';
    thankYouMessage.innerHTML = `
        <div class="message-content">
            <h3>Thank You!</h3>
            <p>We've received your message and will get back to you soon.</p>
        </div>
    `;
    document.body.appendChild(thankYouMessage);
    
    // Remove the message after 5 seconds
    setTimeout(() => {
        thankYouMessage.style.opacity = '0';
        setTimeout(() => thankYouMessage.remove(), 500);
    }, 5000);
}

// Add scroll-based animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

// Observe all service cards and sections
document.querySelectorAll('.service-card, .content-section').forEach((el) => {
    el.classList.add('fade-in-hidden');
    observer.observe(el);
});
