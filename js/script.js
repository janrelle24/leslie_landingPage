/**Code for login btn */
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    // e Store email og password
    const storedEmail = 'horohorolesliemae@gmail.com';
    const storedPassword = 'password123';

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validate against stored email and password
        if (username === storedEmail && password === storedPassword) {
            errorMessage.style.display = 'none';
            alert('Login successful!');
            // Redirect sa index.html after successful login
            window.location.href = 'index.html';
        } else {
            document.getElementById("password").value = ""; //clear password field
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.style.display = 'block';

            // Hide error after 3 seconds
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        }
    });
});

/*Code for logout btn */
document.getElementById("logoutBtn").addEventListener("click", function () {
    window.location.href = "loginPage.html";   
});
/* code for email sending */
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formStatus = document.getElementById('formStatus');

    // Basic validation
    if (name === "" || email === "" || message === "") {
        formStatus.textContent = "Please fill in all fields.";
        formStatus.style.color = "red";
        return;

        // Hide after 5 seconds
        setTimeout(() => {
            formStatus.style.display = "none";
        }, 5000);

        return;
    }
        
    // Simulate sending data (in a real application, you'd use fetch() or XMLHttpRequest)
    console.log("Form submitted:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    formStatus.textContent = "Message sent successfully!";
    formStatus.style.color = "green";

    // Clear form fields
    document.getElementById('contactForm').reset();

    // Hide after 5 seconds
    setTimeout(() => {
        formStatus.style.display = "none";
    }, 5000);
});


// NAV ACTIVE LINK + SMOOTH SCROLL
const navLinks = document.querySelectorAll(".nav-link");

// Smooth scroll + active highlight
navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        // Remove active from all
        navLinks.forEach(l => l.classList.remove("active"));

        // Add active to clicked link
        this.classList.add("active");

        // Scroll to section smoothly
        const target = document.querySelector(this.getAttribute("href"));
        const headerOffset = 200; // your header height
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});


// Highlight section while scrolling
window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 250;

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));

        if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        }
    });
});

// ELEMENTS
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");

// OPEN MENU
hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.add("active");
    overlay.classList.add("active");
});

// CLOSE WHEN CLICKING OVERLAY
overlay.addEventListener("click", () => {
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
});

// CLOSE WHEN CLICKING ANY NAV LINK
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
    });
});



document.addEventListener('DOMContentLoaded', loadLayout);