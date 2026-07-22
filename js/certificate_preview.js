// Download PDF

document.querySelector(".download-btn").addEventListener("click", function () {

    window.print();

});

// Print Certificate

document.querySelector(".print-btn").addEventListener("click", function () {

    window.print();

});

// Dynamic Certificate Data

document.getElementById("studentName").innerText = "Rahul Kumar";
document.getElementById("eventName").innerText = "National Hackathon 2026";