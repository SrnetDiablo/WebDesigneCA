//option for bxslider
$(document).ready(function () {
      $('#bxslider').bxSlider({
        auto: true,
        pager: false,
        speed: 700,
        adaptiveHeight: true
    });
});



document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("image");
    var textContainer = document.getElementById("text-container");

    // When you click
    image.addEventListener("click", function() {
       // check if shoews text
        if (textContainer.style.display === "none") {
            textContainer.style.display = "block"; // display text
        } else {
            textContainer.style.display = "none"; // hide text
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("image2");
    var textContainer = document.getElementById("text-container2");

    // When you click 
    image.addEventListener("click", function() {
        // check if shoews text
        if (textContainer.style.display === "none") {
            textContainer.style.display = "block"; // display text
        } else {
            textContainer.style.display = "none"; // hide text
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("image3");
    var textContainer = document.getElementById("text-container3");

    // When you click
    image.addEventListener("click", function() {
       // check if shoews text
        if (textContainer.style.display === "none") {
            textContainer.style.display = "block"; // display text
        } else {
            textContainer.style.display = "none"; // hide text
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("image4");
    var textContainer = document.getElementById("text-container4");

    // When you click
    image.addEventListener("click", function() {
       // check if shoews text
        if (textContainer.style.display === "none") {
            textContainer.style.display = "block"; // display text
        } else {
            textContainer.style.display = "none"; // hide text
        }
    });
});

//bxslider adjastment of height
$(document).ready(function(){
    $('#bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        auto: true,
        speed: 700
    });
});
