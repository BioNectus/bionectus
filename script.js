// Donation Modal
const donateBtn = document.getElementById('donate-btn');
const modal = document.getElementById('donation-modal');
const closeModal = document.querySelector('.close');

donateBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Contact Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const message = form.querySelector('#message').value;

        if (name && email && message) {
            alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
            form.reset(); // Reset form after submission
        } else {
            alert('Please fill out all fields.');
        }
    });
});

// Smooth Scrolling
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
