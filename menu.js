document.addEventListener("DOMContentLoaded", function() {
    const cesarButton = document.getElementById("cesarButton");
    const viggenereButton = document.getElementById("viggenereButton");

    cesarButton.addEventListener("click", function() {
        window.location.href = "./01Cesar/cesar.html";
    });

    viggenereButton.addEventListener("click", function() {
        window.location.href = "./02Viggenere/viggenere.html";
    });
});