// script.js
document.addEventListener("DOMContentLoaded", function () {
    const startGameButton = document.getElementById("startGameButton");
    const endGameButton = document.getElementById("endGameButton");
    const timerElement = document.getElementById("timer");

    let isGameRunning = false;
    let startTime = 0;
    let interval;

    startGameButton.addEventListener("click", function () {
        isGameRunning = true;
        startTime = Date.now();
        startGameButton.style.display = "none";
        endGameButton.style.display = "block";
        timerElement.style.display = "block";
        interval = setInterval(updateTimer, 1000);
    });

    endGameButton.addEventListener("click", function () {
        isGameRunning = false;
        clearInterval(interval);
        startGameButton.style.display = "block";
        endGameButton.style.display = "none";
        timerElement.style.display = "none";
        alert("Congratulations! You managed to limit your screen time.");
        resetTimer();
    });

    function updateTimer() {
        const currentTime = Date.now();
        const elapsedTime = new Date(currentTime - startTime);
        const minutes = elapsedTime.getUTCMinutes();
        const seconds = elapsedTime.getUTCSeconds();
        timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    function resetTimer() {
        timerElement.textContent = "00:00";
    }
});
