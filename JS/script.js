function setMinDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
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
    var apartment = document.getElementById("apartment").value;
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;

    if (name && phone && email && checkin && checkout && apartment && adults && children) {
        // Mostra a mensagem de sucesso
        document.getElementById("successMessage").style.display = "block";
        // Limpa os campos do formulário
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("checkin").value = "";
        document.getElementById("checkout").value = "";
        document.getElementById("apartment").value = "";
        document.getElementById("adults").value = "";
        document.getElementById("children").value = "";
    } else {
        // Se algum campo estiver vazio, não faz nada
        return false;
    }
}
