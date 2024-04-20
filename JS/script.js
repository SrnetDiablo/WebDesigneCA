function setMinDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; // January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("checkin").setAttribute("min", today);
}

function submitForm() {
    // Verifica se todos os campos estão preenchidos
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var checkin = document.getElementById("checkin").value;
    var checkout = document.getElementById("checkout").value;
    var apartment = document.querySelector('input[name="apartment"]:checked');
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;

    // Convertendo as datas de string para objetos Date
    var checkinDate = new Date(checkin);
    var checkoutDate = new Date(checkout);

    // Verificando se alguma data está vazia ou se a data de check-out é anterior à data de check-in
    if (name && phone && email && checkin && checkout && apartment && adults && children && checkinDate <= checkoutDate) {
        // Mostra a mensagem de sucesso
        document.getElementById("successMessage").style.display = "block";
        // Limpa os campos do formulário
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("checkin").value = "";
        document.getElementById("checkout").value = "";
        // Limpa o botão de opção selecionado
        apartment.checked = false;
        document.getElementById("adults").value = "";
        document.getElementById("children").value = "";
    } else {
        // Se algum campo estiver vazio ou a data de check-out for anterior à data de check-in, mostra uma mensagem de erro
        alert("Please fill out all fields correctly and ensure that the check-out date is after the check-in date.");
        return false;
    }
}


// Function to go to the reservation page 
function redirectToReservationPage() {
    window.location.href = "reservationpage.html";
}
