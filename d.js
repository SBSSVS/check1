// script.js
document.addEventListener("DOMContentLoaded", function () {
    const categoryFilter = document.getElementById("categoryFilter");
    const informationList = document.getElementById("informationList");
    const information = document.getElementById("information");

    // Sample information data with categories
    const informationData = [
        { title: "Item 1", category: "category1" },
        { title: "Item 2", category: "category2" },
        { title: "Item 3", category: "category3" },
        // Add more items with categories here
    ];

    // Populate information items
    informationData.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item.title;
        listItem.dataset.category = item.category;
        information.appendChild(listItem);
    });

    // Event listener for category filter
    categoryFilter.addEventListener("change", function () {
        const selectedCategory = categoryFilter.value;
        filterInformation(selectedCategory);
    });

    // Function to filter information based on category
    function filterInformation(category) {
        const items = information.children;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const itemCategory = item.dataset.category;
            if (category === "all" || category === itemCategory) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        }
    }
});
