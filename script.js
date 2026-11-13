document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('#contactForm');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            let name = document.querySelector('#name').value.trim();
            let email = document.querySelector('#email').value.trim();
            let message = document.querySelector('#message').value.trim();
            let error = document.querySelector("#error"); 

            if (name.length<2){
                error.textContent = "Please enter your name.";
                return;
            }
            if (!email.includes("@") || !email.includes(".")){
                error.textContent = "Please enter a valid email.";
                return;
            }
            if (message.length<10){
                error.textContent = "Message must be at least 10 characters.";
                return;
            }
            
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