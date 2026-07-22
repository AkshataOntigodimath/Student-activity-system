// Search & Filter

const searchInput = document.getElementById("searchInput");
const eventFilter = document.getElementById("eventFilter");
const rows = document.querySelectorAll("tbody tr");

function filterCertificates() {

    const search = searchInput.value.toLowerCase();
    const event = eventFilter.value.toLowerCase();

    rows.forEach(row => {

        const student = row.cells[0].innerText.toLowerCase();
        const usn = row.cells[1].innerText.toLowerCase();
        const eventName = row.cells[2].innerText.toLowerCase();

        const matchSearch =
            student.includes(search) ||
            usn.includes(search);

        const matchEvent =
            event === "all events" ||
            eventName === event;

        row.style.display = (matchSearch && matchEvent) ? "" : "none";

    });

}

searchInput.addEventListener("keyup", filterCertificates);
eventFilter.addEventListener("change", filterCertificates);


// Generate Certificate

document.querySelectorAll(".generate-btn").forEach(button => {

    button.addEventListener("click", function () {

        const row = this.closest("tr");

        const status = row.querySelector(".status");

        status.innerText = "Generated";
        status.className = "status generated";

        this.innerText = "Generated";
        this.disabled = true;
        this.style.background = "#43A047";

        alert("Certificate generated successfully!");

    });

});


// View Certificate

document.querySelectorAll(".view-btn").forEach(button => {

    button.addEventListener("click", function () {

        window.location.href = "certificate_preview.html";

    });

});


// Download Certificate

document.querySelectorAll(".download-btn").forEach(button => {

    button.addEventListener("click", function () {

        const student = this.closest("tr").cells[0].innerText;

        alert("Downloading certificate of " + student);

    });

});


// Generate All Certificates

document.querySelector(".generate-all-btn").addEventListener("click", function () {

    document.querySelectorAll(".generate-btn").forEach(button => {

        const row = button.closest("tr");
        const status = row.querySelector(".status");

        status.innerText = "Generated";
        status.className = "status generated";

        button.innerText = "Generated";
        button.disabled = true;
        button.style.background = "#43A047";

    });

    alert("All pending certificates generated successfully!");

});