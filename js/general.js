$(document).ready(function() {
    $("#menu-toggle").on("click", function(event) {
        //Toggle the "show" class
        $("#menu").toggleClass("show");
        event.preventDefault();
    });

});
document.getElementById("cp-year").innerHTML = new Date().getFullYear();