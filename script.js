/*
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic validation (replace with actual authentication logic)
        if (username === 'user' && password === 'password') {
            errorMessage.style.display = 'none';
            alert('Login successful!'); // Or redirect to another page
            // window.location.href = 'dashboard.html';
        } else {
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.style.display = 'block';
        }
    });
});
*/