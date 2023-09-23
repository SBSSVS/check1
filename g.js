// script.js
document.addEventListener("DOMContentLoaded", function () {
    const moodForm = document.getElementById("moodForm");
    const moodHistory = document.getElementById("moodHistory");

    moodForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const selectedMood = document.getElementById("mood").value;
        recordMood(selectedMood);
    });

    function recordMood(mood) {
        // In a real-world application, you would send the mood data to a backend for storage.
        // Here, we simulate the storage action by adding a list item to the UI.
        const moodItem = document.createElement("li");
        moodItem.textContent = `Mood: ${mood}, Date: ${getCurrentDate()}`;
        moodHistory.appendChild(moodItem);
        clearForm(moodForm);
    }

    function getCurrentDate() {
        const currentDate = new Date();
        return currentDate.toDateString();
    }

    function clearForm(form) {
        // Clear the select element in the form
        form.reset();
    }
});
