// ===========================
// Registrations JavaScript
// ===========================


// Approve Registration

const approveButtons = document.querySelectorAll(".approve-btn");


approveButtons.forEach(button => {


    button.addEventListener("click", function(){


        let row = this.closest("tr");


        let status = row.querySelector(".status");


        status.innerText = "Approved";


        status.classList.remove("pending");

        status.classList.add("approved");


        alert("Registration approved successfully!");


    });


});



// ===========================
// Reject Registration
// ===========================


const rejectButtons = document.querySelectorAll(".reject-btn");


rejectButtons.forEach(button => {


    button.addEventListener("click", function(){


        let row = this.closest("tr");


        let status = row.querySelector(".status");


        status.innerText = "Rejected";


        status.classList.remove("pending");

        status.classList.remove("approved");


        status.classList.add("rejected");


        alert("Registration rejected!");


    });


});