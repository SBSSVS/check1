// script.js
document.addEventListener("DOMContentLoaded", function () {
    const userInterests = ["Technology", "Science", "Art"]; // Sample user interests
    const contentData = [
        { title: "Tech News 1", category: "Technology" },
        { title: "Science Discovery", category: "Science" },
        { title: "Art Inspiration", category: "Art" },
        // Add more content items here
    ];

    const userInterestsList = document.getElementById("userInterests");
    const contentList = document.getElementById("contentList");

    // Display user interests
    userInterests.forEach((interest) => {
        const interestItem = document.createElement("li");
        interestItem.textContent = interest;
        userInterestsList.appendChild(interestItem);
    });

    // Display recommended content based on user interests
    const recommendedContent = contentData.filter((item) => userInterests.includes(item.category));

    recommendedContent.forEach((content) => {
        const contentItem = document.createElement("li");
        contentItem.textContent = content.title;
        contentList.appendChild(contentItem);
    });
});
