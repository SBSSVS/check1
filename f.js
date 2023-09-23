// script.js
document.addEventListener("DOMContentLoaded", function () {
    const reportForm = document.getElementById("reportForm");
    const blockForm = document.getElementById("blockForm");

    reportForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const contactName = document.getElementById("contactName").value;
        const reportReason = document.getElementById("reportReason").value;
        reportContact(contactName, reportReason);
    });

    blockForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const contactToBlock = document.getElementById("contactToBlock").value;
        blockContact(contactToBlock);
    });

    function reportContact(contactName, reportReason) {
        // In a real-world application, you would send the report data to a backend for processing and storage.
        // Here, we simulate the report action by displaying an alert.
        alert(`Reported ${contactName} for the following reason: ${reportReason}`);
        clearForm(reportForm);
    }

    function blockContact(contactName) {
        // In a real-world application, you would update the user's block list in the backend.
        // Here, we simulate the blocking action by displaying an alert.
        alert(`Blocked contact: ${contactName}`);
        clearForm(blockForm);
    }

    function clearForm(form) {
        // Clear form inputs
        form.reset();
    }
});
