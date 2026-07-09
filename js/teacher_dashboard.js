// ===============================
// Teacher Dashboard JavaScript
// ===============================


// Notification Button

const notificationBtn = document.querySelector(".notification-btn");

if (notificationBtn) {

    notificationBtn.addEventListener("click", function () {

        alert("You have 3 new notifications!");

    });

}


// ===============================
// Sidebar Active Menu
// ===============================

const menuLinks = document.querySelectorAll(".menu li a");

menuLinks.forEach(link => {

    link.addEventListener("click", function () {

        menuLinks.forEach(item => {

            item.parentElement.classList.remove("active");

        });


        this.parentElement.classList.add("active");

    });

});


// ===============================
// Search Function
// ===============================

const searchInput = document.querySelector(".search-box input");


if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let searchValue = this.value.toLowerCase();


        let rows = document.querySelectorAll(
            ".upcoming-events tbody tr"
        );


        rows.forEach(row => {

            let text = row.innerText.toLowerCase();


            if (text.includes(searchValue)) {

                row.style.display = "";

            } 
            else {

                row.style.display = "none";

            }

        });

    });

}


// ===============================
// Quick Action Buttons
// ===============================

const actionButtons = document.querySelectorAll(".action-btn");


actionButtons.forEach(button => {


    button.addEventListener("click", function () {


        let action = this.innerText.trim();


        alert(action + " page will open soon!");


    });


});