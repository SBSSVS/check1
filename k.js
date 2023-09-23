// script.js
document.addEventListener("DOMContentLoaded", function () {
    const startReminderButton = document.getElementById("startReminderButton");
    const stopReminderButton = document.getElementById("stopReminderButton");
    const screenTimeLimitInput = document.getElementById("screenTimeLimit");

    let timer;
    let notificationPermission = false;

    startReminderButton.addEventListener("click", function () {
        const screenTimeLimit = parseInt(screenTimeLimitInput.value, 10);
        if (isNaN(screenTimeLimit) || screenTimeLimit <= 0) {
            alert("Please enter a valid screen time limit.");
            return;
        }

        startReminderButton.style.display = "none";
        stopReminderButton.style.display = "block";

        // Set up a timer to check screen time
        timer = setInterval(function () {
            const screenTime = getScreenTime();
            if (screenTime >= screenTimeLimit) {
                notifyUser();
            }
        }, 1000);
    });

    stopReminderButton.addEventListener("click", function () {
        clearInterval(timer);
        startReminderButton.style.display = "block";
        stopReminderButton.style.display = "none";
    });

    function getScreenTime() {
        // In a real-world application, you would track the user's screen time.
        // For this example, we'll simulate screen time.
        return Math.floor(Math.random() * 61); // Simulate screen time between 0 and 60 minutes.
    }

    function notifyUser() {
        if (notificationPermission) {
            const notification = new Notification("Self-Care Reminder", {
                body: "It's time to take a break for self-care!",
                icon: "icon.png" // Replace with your own icon URL
            });
        } else {
            alert("It's time to take a break for self-care!");
        }
    }

    // Request notification permission
    if ("Notification" in window) {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                notificationPermission}
            })      
          }
