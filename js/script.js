
        // Get the dialog and buttons 
        const dialog = document.getElementById("exampleDialog");
        const openButton = document.getElementById("openDialog");
        const closeButton = document.getElementById("closeDialog");
        const submitButton = document.getElementById("submitBooking");
        // Open the dialog 
        openButton.addEventListener("click", function () 
            {
                dialog.showModal(); 
            }
        );
        // Close the dialog 
        closeButton.addEventListener("click", function () 
            { 
                dialog.close();
            });
        // Submit booking request
        submitButton.addEventListener("click", function () 
            { 
                alert("Your booking request has been submitted successfully!"); 
                dialog.close(); 
        
            }); 
