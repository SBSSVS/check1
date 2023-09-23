// script.js
document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById("timer");
    let totalTimeInSeconds = 0;

    setInterval(function () {
        totalTimeInSeconds += 1;
        updateTimerDisplay();
    }, 1000);

    function updateTimerDisplay() {
        const hours = Math.floor(totalTimeInSeconds / 3600);
        const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
        const seconds = totalTimeInSeconds % 60;

        const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        timerElement.textContent = formattedTime;
    }
});
