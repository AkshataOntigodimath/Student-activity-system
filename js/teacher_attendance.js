// Toggle Present / Absent

const toggleButtons = document.querySelectorAll(".toggle-btn");

const presentCount = document.getElementById("presentCount");
const absentCount = document.getElementById("absentCount");

function updateCounts() {

    const present = document.querySelectorAll(".present").length;
    const absent = document.querySelectorAll(".absent").length;

    presentCount.innerText = present;
    absentCount.innerText = absent;
}

toggleButtons.forEach(button => {

    button.addEventListener("click", function () {

        const status = this.parentElement.previousElementSibling.querySelector(".status");

        if (status.classList.contains("present")) {

            status.classList.remove("present");
            status.classList.add("absent");

            status.innerText = "Absent";

        } else {

            status.classList.remove("absent");
            status.classList.add("present");

            status.innerText = "Present";
        }

        updateCounts();

    });

});


// Search Student

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {

        const text = row.innerText.toLowerCase();

        row.style.display = text.includes(value) ? "" : "none";

    });

});


// Save Attendance

const saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener("click", function () {

    alert("Attendance saved successfully!");

});