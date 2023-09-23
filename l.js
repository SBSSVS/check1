// script.js
document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedbackForm");
    const suggestionElement = document.getElementById("suggestion");

    feedbackForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const appName = document.getElementById("appName").value;
        const feedback = document.getElementById("feedback").value;
        provideSuggestions(appName, feedback);
    });

    function provideSuggestions(appName, feedback) {
        // In a real-world application, you would analyze the feedback and provide tailored suggestions.
        // Here, we simulate the suggestion based on a simple condition.
        let suggestion = "Thank you for your feedback!";

        if (feedback.toLowerCase().includes("screen time")) {
            suggestion = `Based on your feedback about ${appName}, we suggest you limit your screen time while using this app for better digital well-being.`;
        }

        displaySuggestion(suggestion);
    }

    function displaySuggestion(suggestion) {
        suggestionElement.textContent = suggestion;
    }
});
