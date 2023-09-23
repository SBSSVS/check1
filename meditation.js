document.addEventListener("DOMContentLoaded", function () {
    let timer;
    const minutesDisplay = document.getElementById("minutes");
    const secondsDisplay = document.getElementById("seconds");
    const startMeditationButton = document.getElementById("startMeditation");
    const resetTimerButton = document.getElementById("resetTimer");

    startMeditationButton.addEventListener("click", function () {
        startTimer(5); // Set the meditation time in minutes (e.g., 5 minutes)
    });

    resetTimerButton.addEventListener("click", function () {
        resetTimer();
    });

    function startTimer(minutes) {
        let totalSeconds = minutes * 60;

        timer = setInterval(function () {
            const minutesLeft = Math.floor(totalSeconds / 60);
            const secondsLeft = totalSeconds % 60;

            minutesDisplay.textContent = String(minutesLeft).padStart(2, "0");
            secondsDisplay.textContent = String(secondsLeft).padStart(2, "0");

            if (totalSeconds <= 0) {
                clearInterval(timer);
                alert("Meditation session is over.");
            } else {
                totalSeconds--;
            }
        }, 1000);
    }

    function resetTimer() {
        clearInterval(timer);
        minutesDisplay.textContent = "00";
        secondsDisplay.textContent = "00";
    }
});
