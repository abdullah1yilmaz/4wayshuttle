document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting immediately

    // Basic validation
    let valid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if the name is empty
    if (name === "") {
        alert("Please enter your name.");
        valid = false;
    }
    // Check if the email is valid
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        valid = false;
    }
    // Check if the message is empty
    if (message === "") {
        alert("Please enter a message.");
        valid = false;
    }

    // If the form is valid, submit the form
    if (valid) {
        this.submit(); // Actually submit the form
    }
});
