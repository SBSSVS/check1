// script.js
document.addEventListener("DOMContentLoaded", function () {
    const insightsList = document.getElementById("insightsList");

    // Simulated digital habit insights
    const insightsData = [
        { app: "Facebook", timeSpent: "2 hours" },
        { app: "YouTube", timeSpent: "1.5 hours" },
        { app: "Instagram", timeSpent: "1 hour" },
        { website: "News website", timeSpent: "30 minutes" },
        // Add more insights as needed
    ];

    displayInsights(insightsData);

    function displayInsights(insightsData) {
        insightsData.forEach((insight) => {
            const listItem = document.createElement("li");

            if (insight.app) {
                listItem.textContent = `You spent ${insight.timeSpent} on ${insight.app}.`;
            } else if (insight.website) {
                listItem.textContent = `You spent ${insight.timeSpent} on ${insight.website}.`;
            }

            insightsList.appendChild(listItem);
        });
    }
});
