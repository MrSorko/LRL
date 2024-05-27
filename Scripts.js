document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Enkla valideringskontroller
    if (name === '' || email === '' || message === '') {
        document.getElementById('formResponse').textContent = 'Alla fält måste fyllas i!';
        return;
    }

    document.getElementById('formResponse').textContent = 'Tack för ditt meddelande, ' + name + '! Vi återkommer till dig snarast möjligt.';

    // Rensa formuläret
    document.getElementById('contactForm').reset();
});