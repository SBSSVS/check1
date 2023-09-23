// script.js
document.addEventListener("DOMContentLoaded", function () {
    const startDetoxButton = document.getElementById("startDetox");
    const detoxTimeInput = document.getElementById("detoxTime");

    startDetoxButton.addEventListener("click", function () {
        const detoxTime = parseInt(detoxTimeInput.value);
        if (detoxTime > 0) {
            const popUpTime = detoxTime * 60 * 1000; // Convert minutes to milliseconds
            setTimeout(function () {
                displayDigitalDetoxPopup();
            }, popUpTime);
        } else {
            alert("Please enter a valid detox time in minutes.");
        }
    });

    function displayDigitalDetoxPopup() {
        const popUpContainer = document.createElement("div");
        popUpContainer.className = "popup-container";
        popUpContainer.innerHTML = `
            <div class="popup">
                <h2>Digital Detox Reminder</h2>
                <p>Take a break from your screen and relax for a while.</p>
                <button id="closePopup">Got it!</button>
            </div>
        `;

        document.body.appendChild(popUpContainer);

        const closePopupButton = document.getElementById("closePopup");
        closePopupButton.addEventListener("click", function () {
            popUpContainer.style.display = "none";
        });
    }
});
