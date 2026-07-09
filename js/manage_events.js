// ===========================
// Manage Events JavaScript
// ===========================


// Add Event Button

const addEventBtn = document.querySelector(".add-event-btn");


if(addEventBtn){

    addEventBtn.addEventListener("click", function(){

        let eventName = prompt("Enter Event Name:");

        if(eventName){

            alert(eventName + " event created successfully!");

        }

    });

}



// ===========================
// Delete Event
// ===========================


const deleteButtons = document.querySelectorAll(".delete-btn");


deleteButtons.forEach(button => {


    button.addEventListener("click", function(){


        let confirmation = confirm(
            "Are you sure you want to delete this event?"
        );


        if(confirmation){

            let row = this.closest("tr");

            row.remove();

            alert("Event deleted successfully!");

        }


    });


});



// ===========================
// Edit Event
// ===========================


const editButtons = document.querySelectorAll(".edit-btn");


editButtons.forEach(button => {


    button.addEventListener("click", function(){


        let row = this.closest("tr");


        let eventName = row.children[0];


        let updatedName = prompt(
            "Edit Event Name:",
            eventName.innerText
        );


        if(updatedName){

            eventName.innerText = updatedName;

            alert("Event updated successfully!");

        }


    });


});