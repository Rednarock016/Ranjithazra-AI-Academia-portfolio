document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('#contactForm');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            let name = document.querySelector('#name').value.trim();
            let email = document.querySelector('#email').value.trim();
            let message = document.querySelector('#message').value.trim();
            let error = document.querySelector("#error"); 
            let responseMessage = document.querySelector('#responseMessage');

            // Reset previous messages
            if (error) {
                error.textContent = "";
            }
            if (responseMessage) {
                responseMessage.textContent = "";
            }

            if (name.length < 2) {
                if (error) error.textContent = "Please enter your name.";
                return;
            }
            if (!email.includes("@") || !email.includes(".")) {
                if (error) error.textContent = "Please enter a valid email.";
                return;
            }
            if (message.length < 10) {
                if (error) error.textContent = "Message must be at least 10 characters.";
                return;
            }
            
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