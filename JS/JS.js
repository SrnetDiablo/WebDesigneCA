// script.js

// Function to calculate the number of days between two dates
function calculateDays() {
    // Get the check-in and check-out date values
    var checkinDate = new Date(document.getElementById("checkin").value);
    var checkoutDate = new Date(document.getElementById("checkout").value);

    // Calculate the difference in milliseconds
    var difference = checkoutDate.getTime() - checkinDate.getTime();

    // Convert milliseconds to days
    var days = difference / (1000 * 3600 * 24);

    // Update the number of days in the form
    document.getElementById("numDays").innerText = days.toFixed(0);
}

// Function to set minimum date for check-out date
function setMinDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("checkin").setAttribute("min", today);
}
