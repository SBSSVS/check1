// script.js
document.addEventListener("DOMContentLoaded", function () {
    const loginSection = document.getElementById("loginSection");
    const contentSection = document.getElementById("contentSection");
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loggedInUser = document.getElementById("loggedInUser");
    const logoutButton = document.getElementById("logoutButton");

    let authenticatedUser = null;

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // In a real-world application, you would check credentials against a database
        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        if (authenticateUser(enteredUsername, enteredPassword)) {
            authenticatedUser = enteredUsername;
            showPrivateContent();
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });

    logoutButton.addEventListener("click", function () {
        authenticatedUser = null;
        showLoginForm();
    });

    function authenticateUser(username, password) {
        // Simulated authentication (replace with your actual authentication logic)
        return username === "user1" && password === "password";
    }

    function showLoginForm() {
        loginForm.reset();
        loginSection.style.display = "block";
        contentSection.style.display = "none";
    }

    function showPrivateContent() {
        loggedInUser.textContent = authenticatedUser;
        loginSection.style.display = "none";
        contentSection.style.display = "block";
    }

    // Initially, show the login form
    showLoginForm();
});
