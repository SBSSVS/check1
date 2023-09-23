// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Set the time interval for the pop-up (2 minutes = 120,000 milliseconds)
    const popUpTime = 120000;

    setTimeout(function () {
        displayDigitalDetoxPopup();
    }, popUpTime);

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
