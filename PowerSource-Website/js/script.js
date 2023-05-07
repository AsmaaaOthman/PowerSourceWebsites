$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(this).toggleClass("close")
    });

    // wow.js
    new WOW().init();
})