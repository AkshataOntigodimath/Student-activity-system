// Search Students

const searchInput = document.getElementById("searchInput");
const eventFilter = document.getElementById("eventFilter");
const rows = document.querySelectorAll("tbody tr");

function filterTable() {

    const searchValue = searchInput.value.toLowerCase();
    const selectedEvent = eventFilter.value.toLowerCase();

    rows.forEach(row => {

        const student = row.cells[0].innerText.toLowerCase();
        const usn = row.cells[1].innerText.toLowerCase();
        const event = row.cells[2].innerText.toLowerCase();

        const matchSearch =
            student.includes(searchValue) ||
            usn.includes(searchValue);

        const matchEvent =
            selectedEvent === "all events" ||
            event === selectedEvent;

        row.style.display = (matchSearch && matchEvent) ? "" : "none";

    });

}

searchInput.addEventListener("keyup", filterTable);
eventFilter.addEventListener("change", filterTable);


// Approve Button

document.querySelectorAll(".approve-btn").forEach(button => {

    button.addEventListener("click", function () {

        const status = this.closest("tr").querySelector(".status");

        status.innerText = "Approved";
        status.className = "status approved";

    });

});


// Reject Button

document.querySelectorAll(".reject-btn").forEach(button => {

    button.addEventListener("click", function () {

        const status = this.closest("tr").querySelector(".status");

        status.innerText = "Rejected";
        status.className = "status rejected";

    });

});


// View Button

document.querySelectorAll(".view-btn").forEach(button => {

    button.addEventListener("click", function () {

        const student =
            this.closest("tr").cells[0].innerText;

        alert("Viewing registration of " + student);

    });

});


// Export Report

document.querySelector(".export-btn").addEventListener("click", function () {

    alert("Registration report exported successfully!");

});