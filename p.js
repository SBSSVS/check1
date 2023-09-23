// script.js
document.addEventListener("DOMContentLoaded", function () {
    const userList = document.getElementById("userList");
    const addUserForm = document.getElementById("addUserForm");

    // Simulated user data
    const users = [
        { id: 1, username: "user1", email: "user1@example.com" },
        { id: 2, username: "user2", email: "user2@example.com" },
        // Add more users as needed
    ];

    displayUserList(users);

    addUserForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        addUser(username, email);
    });

    function displayUserList(users) {
        userList.innerHTML = ""; // Clear the existing list

        users.forEach((user) => {
            const listItem = document.createElement("li");
            listItem.textContent = `Username: ${user.username}, Email: ${user.email}`;
            userList.appendChild(listItem);
        });
    }

    function addUser(username, email) {
        const newUser = {
            id: users.length + 1,
            username,
            email,
        };

        users.push(newUser);
        displayUserList(users);

        // In a real-world application, you would send the user data to a backend server for storage.
        // Here, we simulate adding a user to the list.
    }
});
