// script.js
document.addEventListener("DOMContentLoaded", function () {
    const feelingForm = document.getElementById("feelingForm");
    const feelingsList = document.getElementById("feelingsList");
    const feelings = document.getElementById("feelings");
    const feelingTextarea = document.getElementById("feeling");

    feelingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const feelingText = feelingTextarea.value.trim();

        if (feelingText) {
            const listItem = document.createElement("li");
            listItem.textContent = feelingText;
            feelings.appendChild(listItem);

            // Clear the textarea
            feelingTextarea.value = "";

            // Show the recent feelings section
            feelingsList.style.display = "block";
        }
    });
});
