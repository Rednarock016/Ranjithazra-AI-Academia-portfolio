document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('#contactForm');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            let name = document.querySelector('#name').value.trim();
            let email = document.querySelector('#email').value.trim();
            let message = document.querySelector('#message').value.trim();

            let responseMessage = document.querySelector('#responseMessage');
            if (!responseMessage) {
                responseMessage = document.createElement('p');
                responseMessage.id = 'responseMessage';
                form.appendChild(responseMessage);
            }

            responseMessage.className = 'success-msg';
            responseMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;

            form.reset();
        });
    }
});