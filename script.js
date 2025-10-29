document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Thanks for your message, Atharv will get back to you soon!');
            contactForm.reset();
        });
    }
    
    // Interactive elements
    const projectCards = document.querySelectorAll('#projects > div > div');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('img').classList.add('scale-105');
            card.querySelector('img').classList.add('transition-transform');
            card.querySelector('img').classList.add('duration-300');
        });
        
        card.addEventListener('mouseleave', () => {
            card.querySelector('img').classList.remove('scale-105');
        });
    });
});
