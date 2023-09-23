// script.js
document.addEventListener("DOMContentLoaded", function () {
    const moodForm = document.getElementById("moodForm");
    const consultantResult = document.getElementById("consultantResult");

    moodForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const selectedMood = document.getElementById("mood").value;
        suggestConsultant(selectedMood);
    });

    function suggestConsultant(mood) {
        // In a real-world application, you would query a database or a service to find a relevant consultant based on the user's mood.
        // Here, we simulate the suggestion by displaying a sample consultant.
        const consultant = getSampleConsultant(mood);
        displayConsultant(consultant);
    }

    function getSampleConsultant(mood) {
        // In a real-world application, you would fetch consultant data from a database.
        // Here, we simulate sample consultant data.
        const consultants = {
            happy: "Dr. Joy Smith (Happiness Consultant)",
            sad: "Dr. Grace Johnson (Emotional Wellness Expert)",
            angry: "Dr. Calm Waters (Anger Management Specialist)",
            anxious: "Dr. Mindful Lee (Anxiety Therapist)",
        
            // Add more consultants as needed
        };

        return consultants[mood] || "No consultant found for this mood.";
    }

    function displayConsultant(consultant) {
        consultantResult.textContent = consultant;
    }
});
